from django.contrib.auth.models import User, Group
from rest_framework import filters
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.parsers import FormParser, FileUploadParser, MultiPartParser, JSONParser

from .models import *
from .serializers import *


class AlbumsViewSet(viewsets.ModelViewSet):
    queryset = Albums.objects.all()
    serializer_class = AlbumsSerializer
    parser_classes = (JSONParser, FormParser, MultiPartParser,)
    def post(self, request):
        name = request.data['name']
        image = request.data['image']
        sz = AlbumsSerializer(data=request.data)
        print('SERIALIZER',sz)
        response = Response()
        response.data = {
            'name': name,
            'image': image,
        }
        return response
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    filter_backends = [filters.SearchFilter]
    search_fields = ['name','stock']

class GenresViewSet(viewsets.ModelViewSet):
    queryset = Genres.objects.all().order_by('id')
    serializer_class = GenresSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

class SongsViewSet(viewsets.ModelViewSet):
    queryset = Songs.objects.all().order_by('id')
    parser_classes = (JSONParser, FormParser, MultiPartParser,)
    def post(self, request):
        name = request.data['name']
        image = request.data['image']
        sz = Songs(data=request.data)
        print('SERIALIZER',sz)
        response = Response()
        response.data = {
            'name': name,
            'image': image,
        }
        return response
    serializer_class = SongsSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'stock']

class AuthorsViewSet(viewsets.ModelViewSet):
    queryset = Authors.objects.all().order_by('name')
    serializer_class = AuthorsSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )  
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']
