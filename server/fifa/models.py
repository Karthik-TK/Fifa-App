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
        return self.title