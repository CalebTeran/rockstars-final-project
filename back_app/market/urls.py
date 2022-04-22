from rest_framework import routers
from .views import *
from django.urls import path, include

router = routers.DefaultRouter()
router.register('orders', OrdersViewSet)
router.register('shipments', ShipmentsViewSet)
router.register('payments', PaymentsViewSet)

urlpatterns = [
	path('', include(router.urls)),
]