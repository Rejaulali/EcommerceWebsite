"""supergrocery URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views
urlpatterns = [
    path('register/', views.register, name="register"),
    path('login/', views.login, name = "login"),
    path('logout/', views.logout_page, name = "logout"),
    path('profile/', views.profile, name = "profile" ),
    path('sgadmin/', views.sgadmin, name =  "sgadmin"),
    path('customers/', views.customers, name="customers"),
    path('customer/<int:pk>/', views.customer, name="customer"),
    path('customer_update/<int:pk>/', views.customer_update, name="customer_update"),
    path('customer_delete/<int:pk>/', views.customer_delete, name="customer_delete"),
    path('customer_create/', views.customer_create, name="customer_create"),
    path('all_products/', views.all_products, name="all_products")
]
