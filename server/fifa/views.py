from django.shortcuts import render
from django.http import HttpResponse
from .models import Fifa

# Create your views here.

def index(request):
    list = Fifa.objects.all()
    return HttpResponse(list)