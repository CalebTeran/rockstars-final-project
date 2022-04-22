from rest_framework import routers
from .views import *
from django.urls import path, include

router = routers.DefaultRouter()
router.register('albums', AlbumsViewSet)
router.register('songs', SongsViewSet)
router.register('genres', GenresViewSet)
router.register('authors', AuthorsViewSet)

urlpatterns = [
	path('', include(router.urls)),
]