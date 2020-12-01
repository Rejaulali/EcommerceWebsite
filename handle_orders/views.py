from django.shortcuts import render,redirect
from django.http import HttpResponse
from accounts.decorators import login_before,allowed_users
from .models import *
from .forms import OrderForm
from productDisplay.models import *
from productDisplay.filters import *
# Create your views here.

@login_before
def checkout(request):
	products = product.objects.all()
	myfilter2 = ProductFilter(request.GET, queryset = products)
	context = {
		"myfilter2":myfilter2
	}
	return render(request,'checkout.html',context)

@login_before
def order(request,bill):
	products = product.objects.all()
	myfilter2 = ProductFilter(request.GET, queryset = products)
	context = {
		"myfilter2":myfilter2
	}
	if request.method == 'POST':
		house = request.POST.get('house')
		street = request.POST.get('street')
		locality = request.POST.get('locality')
		city = request.POST.get('city')
		pincode = request.POST.get('pincode')
		landmark = request.POST.get('landmark')
		full_Address = house + " " + street + " " + locality + " " + city + " " + str(pincode) + " " + landmark
		order_description = request.POST.get('order_description')
		Order.objects.create(customer = request.user.customer, order_description = order_description, delivery_address = full_Address,order_bill = bill)
		return redirect('profile')
	return render(request,'order.html',context)

@login_before
def order_profile(request,pk):
	try:
		products = product.objects.all()
		myfilter2 = ProductFilter(request.GET, queryset = products)
		order = request.user.customer.order_set.get(id = pk)
		context ={
			'order':order,
			'myfilter2':myfilter2
		}
		return render(request,'order_profile.html',context)
	except:
		return HttpResponse("<h1>Sorry Requested Order-detail didn't find</h1>")


@allowed_users(['admin'])
def order_admin(request,pk):
	order = Order.objects.get(id = pk)
	products = product.objects.all()
	myfilter2 = ProductFilter(request.GET, queryset = products)
	group = 'none'
	if request.user.groups.exists():
		group = request.user.groups.all()[0].name
	context ={
		'order':order,
		'group':group,
		'myfilter2':myfilter2
	}
	return render(request,'order_admin.html',context)


@allowed_users(['admin'])
def order_update(request,pk):
	order = Order.objects.get(id = pk)
	products = product.objects.all()
	myfilter2 = ProductFilter(request.GET, queryset = products)
	form = OrderForm(instance = order)
	if request.method == 'POST':
		form = OrderForm(request.POST,instance = order)
		if form.is_valid:
			form.save()
			return order_admin(request,order.id)
	context = {
		"form":form,
		"order":order,
		"myfilter2":myfilter2
	}
	return render(request,'order_update.html',context)

@allowed_users(['admin'])
def order_delete(request,pk):
	Order.objects.get(id = pk).delete()
	return redirect('sgadmin')