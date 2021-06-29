from .models import *
from rest_framework import serializers
from dynamic_rest.serializers import DynamicModelSerializer
from dynamic_rest.fields import DynamicRelationField
from rest_framework.serializers import ModelSerializer
from drf_queryfields import QueryFieldsMixin
class FifaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fifa
        fields = ['id', 'player_id', 'name', 'nationality', 'position', 'overall', 'age', 'hits', 'potential', 'team']

class TournamentSerializer(QueryFieldsMixin, DynamicModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name']

class TeamSerializer(QueryFieldsMixin, DynamicModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name']

class PlayerSerializer(QueryFieldsMixin, DynamicModelSerializer):
    class Meta:
        model = Player
        fields = ['id', 'name', 'player_id', 'nationality', 'age']

class PlayerStatisticSerializer(QueryFieldsMixin, DynamicModelSerializer):
    player_detail = DynamicRelationField(
        'PlayerSerializer',
        # many=True,
        deferred=True)
    team = DynamicRelationField(
        'TeamSerializer',
        # many=True,
        deferred=True)
    tournament = DynamicRelationField(
        'TournamentSerializer',
        many=True,
        deferred=True)
    class Meta:
        model = PlayerStatistic
        fields = ['id', 'player_detail', 'team', 'tournament', 'overall', 'hits', 'potential', 'position']