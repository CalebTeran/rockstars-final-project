from rest_framework import serializers
from .models import *

class AlbumsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Albums
		fields = ['__all__']

class GenresSerializer(serializers.ModelSerializer):
	class Meta:
		model = Genres
		fields = ['__all__']

class AuthorsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Authors
		fields = ['__all__']

class SongsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Songs
		fields = ['__all__']
