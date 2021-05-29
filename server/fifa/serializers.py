from rest_framework import serializers
from .models import Fifa

class FifaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fifa
        fields = ['id', 'player_id', 'name', 'nationality', 'position', 'overall', 'age', 'hits', 'potential', 'team']