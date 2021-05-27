from django.contrib import admin
from .models import Fifa

class FifaAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Fifa, FifaAdmin)