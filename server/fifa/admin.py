from django.contrib import admin
from .models import Fifa

class FifaAdmin(admin.ModelAdmin):
    list_display = ('player_id', 'name', 'nationality', 'position', 'overall', 'age', 'hits', 'potential', 'team')

# Register your models here.

admin.site.register(Fifa, FifaAdmin)