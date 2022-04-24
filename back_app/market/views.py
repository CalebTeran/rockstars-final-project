from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .models import *
from .serializers import *

class ShipmentsViewSet(viewsets.ModelViewSet):
    queryset = Shipments.objects.all().order_by('id')
    serializer_class = ShipmentsSerializer
    permission_classes = (permissions.IsAuthenticated, )

class PaymentsViewSet(viewsets.ModelViewSet):
    queryset = Payments.objects.all().order_by('created_at')
    serializer_class = PaymentsSerializer
    permission_classes = (permissions.IsAuthenticated, )

class OrdersViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all().order_by('created_at')
    serializer_class = OrdersSerializer
    permission_classes = (permissions.IsAuthenticated, )