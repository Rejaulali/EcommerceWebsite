from django.shortcuts import render
from django.http import HttpResponse
from .models import product
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
	context ={
		"product":query_result
	}
	return render(request,'product_page.html',context)