from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    print("hello world")
    
    return render(request,'index.html')