from rest_framework import serializers
from .models import Fifa

class FifaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fifa
        fields = ('id', 'title', 'description', 'completed')