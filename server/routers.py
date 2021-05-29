from rest_framework import routers
from fifa.viewsets import FifaViewSet
router = routers.SimpleRouter()
router.register(r'fifa', FifaViewSet, basename='fifa')