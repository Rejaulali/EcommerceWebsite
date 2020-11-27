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
    path('checkout/',views.checkout, name="checkout"),
    path('order/<int:bill>/',views.order, name="order"),
    path('order_admin/<int:pk>/',views.order_admin, name="order_admin"),
    path('order_profile/<int:pk>/',views.order_profile, name="order_profile"),
    path('order_delete/<int:pk>/',views.order_delete, name="order_delete"),
    path('order_update/<int:pk>/',views.order_update, name="order_update")
]
