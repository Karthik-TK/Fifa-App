from django.db import models

# Create your models here.

class Fifa(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(max_length=300)
    # age = models.IntegerField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title