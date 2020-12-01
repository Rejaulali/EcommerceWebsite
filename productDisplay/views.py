from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import product
from accounts.decorators import allowed_users
from productDisplay.forms import CreateProductForm
from .filters import ProductFilter

# Create your views here.
def index(request):
    p = product.objects.all()
    myfilter2 = ProductFilter(request.GET,queryset=p)
    context ={
        "product":p,
        "myfilter2":myfilter2
    }    
    return render(request,'index.html',context)

def product_search_page(request,text = "none"):
	if(request.method == "POST"):
		search_item = request.POST.get('category','')
		p = product.objects.all()
		myfilter2 = ProductFilter(request.POST,queryset=p)
		query = myfilter2.qs
		context ={
			"filtered_products": query,
			"search_item":search_item,
			"myfilter2":myfilter2
		}
	else:
		query = product.objects.filter(category = text)
		p = product.objects.all()
		myfilter2 = ProductFilter(request.POST,queryset=p)
		context ={
			"filtered_products": query,
			"search_item":text,
			"myfilter2":myfilter2
		}
	return render(request,'product_search_page.html',context)


def product_page(request,id=0):
	query_result = product.objects.get(id = id)
	group = 'None'
	p = product.objects.all()
	myfilter2 = ProductFilter(request.GET,queryset=p)
	if(request.user.groups.exists()):
		group = request.user.groups.all()[0].name

	context ={
		"product":query_result,
		"group": group,
		"myfilter2":myfilter2
	}
	return render(request,'product_page.html',context)

@allowed_users(['admin'])
def product_list(request):
	products = product.objects.all()
	myfilter = ProductFilter(request.GET, queryset = products)
	products = myfilter.qs
	context = {
		"products":products,
		"myfilter":myfilter,
		"myfilter2":myfilter,
	}
	return render(request, 'product_list.html',context)


@allowed_users(['admin'])
def product_create(request):
	products = product.objects.all()
	myfilter2 = ProductFilter(request.GET, queryset = products)
	form =  CreateProductForm()
	if request.method == 'POST':
		form = CreateProductForm(request.POST,request.FILES)
		if form.is_valid():
			form.save()
			print("form successfully saved")
			return redirect('product_list')
		else:
			print("form is not valid")
	context = {
		"form":form,
		"myfilter2":myfilter2
	}
	return render(request,"product_create.html",context)


@allowed_users(['admin'])
def product_update(request,pk):
	products = product.objects.all()
	myfilter2 = ProductFilter(request.GET, queryset = products)
	form =  CreateProductForm(instance = product.objects.get(id = pk))
	if request.method == 'POST':
		form = CreateProductForm(request.POST,request.FILES, instance = product.objects.get(id = pk))
		if form.is_valid():
			form.save()
			return redirect('product_list')
		else:
			print("form is not valid")
	context = {
		"form":form,
		"product":product.objects.get(id = pk),
		"myfilter2":myfilter2
	}
	return render(request,"product_update.html",context)

@allowed_users(['admin'])
def product_delete(request,pk):
	product.objects.get(id = pk).delete()
	return redirect('product_list')