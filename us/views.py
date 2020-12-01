from django.shortcuts import render
from productDisplay.models import *
from productDisplay.filters import *
# Create your views here.
def contact(request):
	p = product.objects.all()
	myfilter2 = ProductFilter(request.GET,queryset=p)
	context = {
    	"myfilter2":myfilter2
    }
	return render(request,'contact.html',context)
