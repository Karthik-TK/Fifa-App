from django.db import models

# Create your models here.

class Fifa(models.Model):

    player_id = models.IntegerField()
    name = models.CharField(max_length=120)
    nationality = models.CharField(max_length=120, default='SOME STRING')
    position = models.CharField(max_length=120, default='SOME STRING')
    overall = models.IntegerField()
    age = models.IntegerField()
    hits = models.IntegerField()
    potential = models.IntegerField()
    team = models.CharField(max_length=120)

    def _str_(self):
        return self.name

class Tournament(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name

class Team(models.Model):
    name = models.CharField(max_length=120)
    
    def __str__(self):
        return self.name

class Player(models.Model):

    name = models.CharField(max_length=120)
    player_id = models.IntegerField(default=0)
    nationality = models.CharField(max_length=120)
    age = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class PlayerStatistic(models.Model):

    player_detail = models.ForeignKey(Player, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    tournament = models.ManyToManyField(Tournament)
    overall = models.IntegerField(default=0)
    hits = models.IntegerField(default=0)
    potential = models.IntegerField(default=0)
    position = models.CharField(max_length=120)

    class Meta:
        verbose_name_plural = "Player Statistics"

    def __str__(self):
        return self.position