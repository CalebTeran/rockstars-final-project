from django.contrib.auth.models import User, Group
from django.core.cache import cache
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from django.views.decorators.vary import vary_on_cookie,vary_on_headers

from rest_framework import filters
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.parsers import FormParser, FileUploadParser, MultiPartParser, JSONParser
from rest_framework import pagination
from rest_framework import status


from .models import *
from .serializers import *

class CustomPagination(pagination.PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 10
    page_query_param = 'p'

class CustomPaginationOffset(pagination.LimitOffsetPagination):
    default_limit = 2
    limit_query_param = 'l'
    offset_query_param = 'o'
    max_limit = 50


class AlbumsViewSet(viewsets.ModelViewSet):
    queryset = Albums.objects.all().order_by('id')
    serializer_class = AlbumsSerializer
    pagination_class = CustomPagination
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
    pagination_class = CustomPagination
    search_fields = ['name']
    @method_decorator(vary_on_headers('Authorization',))
    @method_decorator(cache_page(60*60, key_prefix='main'), name='dispatch')
    def list(self, *args, **kwargs):
        return super().list(*args, **kwargs)

class SongsViewSet(viewsets.ModelViewSet):
    queryset = Songs.objects.all().order_by('id')
    parser_classes = (JSONParser, FormParser, MultiPartParser,)
    pagination_class = CustomPagination
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
    pagination_class = CustomPagination
