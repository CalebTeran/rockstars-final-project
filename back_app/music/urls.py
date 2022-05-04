from rest_framework import routers
from . import views
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'albums', views.AlbumsViewSet)
router.register(r'songs', views.SongsViewSet)
router.register(r'genres', views.GenresViewSet)
router.register(r'authors', views.AuthorsViewSet)

urlpatterns = [
	path('', include(router.urls)),
]