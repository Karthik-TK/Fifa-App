from django.contrib import admin
from .models import *

class FifaAdmin(admin.ModelAdmin):
    list_display = ('player_id', 'name', 'nationality', 'position', 'overall', 'age', 'hits', 'potential', 'team')

# Register your models here.

admin.site.register(Fifa, FifaAdmin)
admin.site.register(Team)
admin.site.register(Tournament)
admin.site.register(Player)
admin.site.register(PlayerStatistic)