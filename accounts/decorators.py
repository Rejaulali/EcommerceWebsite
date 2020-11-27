from django.shortcuts import redirect
from django.http import HttpResponse

def unauthenticated_user(view_func):
	def wrapper_func(request,*args,**kargs):
		if request.user.is_authenticated:
			return redirect('home')
		else:
			return view_func(request,*args,**kargs)
	return wrapper_func


def login_before(view_func):
	def wrapper_func(request,*args,**kargs):
		if request.user.is_authenticated:
			return view_func(request,*args,**kargs)
		else:
			return redirect('login')
	return wrapper_func


def allowed_users(allowed_roles=[]):
	def decorator(view_func):
		def wrapper_func(request,*args,**kargs):
			group = None
			if request.user.groups.exists():
				group = request.user.groups.all()[0].name

			if group in allowed_roles:
				print(group)
				return view_func(request,*args,**kargs)
			else:
				print(group)
				return HttpResponse("<h1>you are not allowed to see this page</h1>")
		return wrapper_func	
	return decorator



