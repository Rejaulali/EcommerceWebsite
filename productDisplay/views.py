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