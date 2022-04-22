from rest_framework import serializers
from .models import *

class PaymentsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Payments
		fields = ['__all__']

class OrdersSerializer(serializers.ModelSerializer):
	class Meta:
		model = Orders
		fields = ['__all__']

class ShipmentsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Shipments
		fields = ['__all__']
