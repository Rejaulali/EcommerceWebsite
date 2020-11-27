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
    path('',views.index,name="home"),
    path('product_search_page/<str:text>/',views.product_search_page,name="product_search_page"),
    path('product/<str:id>/',views.product_page,name="product_page"),
    path('product_list/',views.product_list, name="product_list"),
    path('product_create/',views.product_create, name="product_create"),
    path('product_update/<int:pk>',views.product_update, name="product_update"),
    path('product_delete/<int:pk>',views.product_delete, name="product_delete"),
]
