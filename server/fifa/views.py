import csv, io
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from .models import *
from .serializers import *
from rest_framework import status, viewsets
from dynamic_rest.viewsets import DynamicModelViewSet

# Create your views here.

def download(request):
    response = HttpResponse(content_type='text/csv')
    writer = csv.writer(response)
    writer.writerow(['Player_ID','Name','Nationality','Postion','Overall','Age','Hits','Potential','Team'])

    for fifa in Fifa.objects.all().values_list('player_id','name','nationality','position','overall','age','hits','potential','team'):
        writer.writerow(fifa)

    response['Content-Disposition'] = 'attachment; filename="fifa.csv"'
    return response



def upload(request):
    template = 'data_upload.html'

    prompt = {
        'order' : 'Order of the CSV data should be player_id; name; nationality; position; overall; age; hits; potential; team'
    }

    if request.method == "GET":
        return render(request, template, prompt)

    csv_file = request.FILES['file']
    if not csv_file.name.endswith('.csv'):
        messages.error(request, 'File format is not a csv')

    data_set = csv_file.read().decode('UTF-8')
    io_string = io.StringIO(data_set)
    next(io_string)
    for column in csv.reader(io_string, delimiter=';', quotechar="|"):
        _, created = Fifa.objects.update_or_create(
            player_id=column[0],
            name=column[1],
            nationality=column[2],
            position=column[3],
            overall=column[4],
            age=column[5],
            hits=column[6],
            potential=column[7],
            team=column[8],
        )
    context = {}
    return render(request, template, context)

class TournamentViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    serializer_class = TournamentSerializer
    queryset = Tournament.objects.all()
    # permission_classes = [IsAccountAdminOrReadOnly]

class TeamViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    features = (
        DynamicModelViewSet.INCLUDE, DynamicModelViewSet.EXCLUDE,
        DynamicModelViewSet.FILTER, DynamicModelViewSet.SORT,
        DynamicModelViewSet.SIDELOADING, DynamicModelViewSet.DEBUG
    )
    serializer_class = TeamSerializer
    queryset = Team.objects.all()
    # permission_classes = [IsAccountAdminOrReadOnly]

class PlayerViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    serializer_class = PlayerSerializer
    queryset = Player.objects.all()
    # permission_classes = [IsAccountAdminOrReadOnly]

class PlayerStatisticViewSet(DynamicModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    features = (
        DynamicModelViewSet.INCLUDE, DynamicModelViewSet.EXCLUDE,
        DynamicModelViewSet.FILTER, DynamicModelViewSet.SORT,
        DynamicModelViewSet.SIDELOADING, DynamicModelViewSet.DEBUG
    )

    serializer_class = PlayerStatisticSerializer
    queryset = PlayerStatistic.objects.all()
    # permission_classes = [IsAccountAdminOrReadOnly]