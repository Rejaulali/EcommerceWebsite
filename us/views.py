from django.shortcuts import render,redirect
from productDisplay.models import *
from productDisplay.filters import *
from .forms import *
# Create your views here.
def contact(request):
	p = product.objects.all()
	myfilter2 = ProductFilter(request.GET,queryset=p)
	form = ContactForm()
	if request.method == 'POST':
		form = ContactForm(request.POST)
		if form.is_valid():
			form.save()
			print("form is valid")
			return redirect('home')

	context = {
    	"myfilter2":myfilter2,
    	"form":form
    }
	return render(request,'contact.html',context)


def about(request):
	p = product.objects.all()
	myfilter2 = ProductFilter(request.GET,queryset=p)
	context = {
    	"myfilter2":myfilter2,
    }
	return render(request,'about.html',context)
