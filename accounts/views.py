from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login as auth_login, logout
# Create your views here.
from .decorators import *
from django.contrib import messages
from .forms import *
from handle_orders.models import *
from productDisplay.models import *
from handle_orders.filters import OrderFilter
from .filters import CustomerFilter
@unauthenticated_user
def register(request):
	form = CreateUserForm()
	if request.method == 'POST':
		form = CreateUserForm(request.POST)
		if form.is_valid():
			user = form.save()
			username = form.cleaned_data.get('username')
			email = form.cleaned_data.get('email')
			Customer.objects.create(user = user, name = username, email = email)
			messages.success(request,'Account created for '+ username)
			return redirect('login')

	context = {
		'form':form
	}
	return render(request,'register.html',context)

@unauthenticated_user
def login(request):

	if request.method == 'POST':
		username = request.POST.get('username','')
		password = request.POST.get('password','')
		user = authenticate(request,username = username, password = password)
		print(user)
		if user is not None:
			auth_login(request,user)
			return redirect('home')
		else:
			messages.info(request,'Username Or Password is incorrect')

	context = {
		
	}
	return render(request,'login.html',context)


def logout_page(request):
	logout(request)
	return redirect('login')


@login_before
def profile(request):
	form = UpdateProfileForm(instance = request.user.customer)
	orders = request.user.customer.order_set.all()
	print(orders)
	if request.method == 'POST':
		form = UpdateProfileForm(request.POST,request.FILES, instance = request.user.customer)
		if form.is_valid():
			form.save()

	context={
		'form':form,
		'orders':orders
	}
	return render(request,'profile.html',context)

@allowed_users(['admin'])
def sgadmin(request):
	orders = Order.objects.all()
	customers = Customer.objects.all()
	products = product.objects.all()
	pending_orders = Order.objects.filter(status = 'Pending')
	myfilter = OrderFilter(request.GET, queryset = orders)
	orders = myfilter.qs
	context ={
		'orders_length':orders.count(),
		'customers_length':customers.count(),
		'products_length':products.count(),
		'pending_orders_length':pending_orders.count(),
		'orders':orders.order_by('-id'),
		'myfilter':myfilter,
	}
	return render(request,'sgadmin.html', context)


@allowed_users(['admin'])
def customers(request):
	customers = Customer.objects.all()
	myfilter = CustomerFilter(request.GET, queryset= customers)
	customers = myfilter.qs
	context={
		'customers':customers,
		'myfilter':myfilter,
	}
	return render(request,'customers.html',context)

@allowed_users(['admin'])
def customer(request,pk):
	customer = Customer.objects.filter(id = pk)
	context={
		'customer':customer[0]
	}
	return render(request,'customer.html',context)

@allowed_users(['admin'])
def customer_update(request,pk):
	form = UpdateProfileForm(instance = Customer.objects.get(id= pk))
	if request.method == 'POST':
		form = UpdateProfileForm(request.POST, request.FILES,instance = Customer.objects.get(id =pk))
		if form.is_valid():
			form.save()
			return redirect('customers')
	context = {
		"form":form,
		"customer":Customer.objects.get(id= pk)
	}
	return render(request,'customer_update.html',context)


@allowed_users(['admin'])
def customer_delete(request,pk):
	Customer.objects.get(id=pk).delete()
	return redirect('customers')


@allowed_users(['admin'])
def customer_create(request):
	form = CreateCustomerForm()
	if request.method == 'POST':
		form = CreateCustomerForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('customers')
	context ={
		"form":form
	}

	return render(request,'customer_create.html',context)

@allowed_users(['admin'])
def all_products(request):
	return HttpResponse("<h1>allProducts</h1>")
