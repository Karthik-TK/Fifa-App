from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import FifaSerializer
from .models import Fifa

# Create your views here.

def index(request):
    list = Fifa.objects.all()
    return HttpResponse(list)

class FifaView(viewsets.ModelViewSet):
    serializer_class = FifaSerializer
    queryset = Fifa.objects.all()