from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.parsers import FormParser, FileUploadParser, MultiPartParser, JSONParser



class AlbumsViewSet(viewsets.ModelViewSet):
    queryset = Albums.objects.all().order_by('id')
    serializer_class = AlbumsSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

class GenresViewSet(viewsets.ModelViewSet):
    queryset = Genres.objects.all().order_by('id')
    serializer_class = GenresSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

class SongsViewSet(viewsets.ModelViewSet):
    queryset = Songs.objects.all().order_by('id')
    serializer_class = SongsSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

class AuthorsViewSet(viewsets.ModelViewSet):
    queryset = Authors.objects.all().order_by('name')
    serializer_class = AuthorsSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )