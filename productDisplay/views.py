from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import product
from accounts.decorators import allowed_users
from productDisplay.forms import CreateProductForm
from .filters import ProductFilter

# Create your views here.
def index(request):
    p = product.objects.all()
    context ={
        "product":p
    }    
    return render(request,'index.html',context)

def product_search_page(request,text = "none"):
	if(request.method == "POST"):
		search_item = request.POST.get('category','')
		query = product.objects.filter(category = search_item)
		context ={
			"filtered_products": query,
			"search_item":search_item,
		}
	else:
		query = product.objects.filter(category = text)
		context ={
			"filtered_products": query,
			"search_item":text,
		}
	return render(request,'product_search_page.html',context)


def product_page(request,id=0):
	query_result = product.objects.get(id = id)
	group = 'None'
	if(request.user.groups.exists()):
		group = request.user.groups.all()[0].name

	context ={
		"product":query_result,
		"group": group,
	}
	return render(request,'product_page.html',context)

@allowed_users(['admin'])
def product_list(request):
	products = product.objects.all()
	myfilter = ProductFilter(request.GET, queryset = products)
	products = myfilter.qs
	context = {
		"products":products,
		"myfilter":myfilter
	}
	return render(request, 'product_list.html',context)


@allowed_users(['admin'])
def product_create(request):
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
		"form":form
	}
	return render(request,"product_create.html",context)


@allowed_users(['admin'])
def product_update(request,pk):
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
	}
	return render(request,"product_update.html",context)

@allowed_users(['admin'])
def product_delete(request,pk):
	product.objects.get(id = pk).delete()
	return redirect('product_list')