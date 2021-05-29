import csv, io
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from .models import Fifa

# Create your views here.

def download(request):
    response = HttpResponse(content_type='text/csv')
    writer = csv.writer(response)
    writer.writerow(['Player_ID','Name','Nationality','Postion','Overall','Age','Hits','Potential','Team'])

    for fifa in Fifa.objects.all().values_list('player_id','name','nationality','position','overall','age','hits','potential','team'):
        writer.writerow(fifa)

    response['Content-Disposition'] = 'attachment; filename="fifa.csv"'
    return response