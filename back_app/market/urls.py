from rest_framework import routers
from . import views
from django.urls import path, include

router = routers.DefaultRouter()
router.register('orders', views.OrdersViewSet)
router.register('shipments', views.ShipmentsViewSet)
router.register('payments', views.PaymentsViewSet)

urlpatterns = [
	path('', include(router.urls)),
]