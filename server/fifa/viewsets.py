from rest_framework import viewsets
from .models import Fifa
from .serializers import FifaSerializer

class FifaViewSet(viewsets.ModelViewSet):
    serializer_class = FifaSerializer

    def get_queryset(self):
        return Fifa.objects.all()