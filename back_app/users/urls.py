from rest_framework import routers
from django.urls import path, include
from .views import *

router = routers.DefaultRouter()
router.register(r'', UserViewSet)
router.register(r'groups', GroupViewSet)

urlpatterns = [
	path('login', LoginView.as_view()),
	path('signin', SigninView.as_view()),
    path('logout', LogoutView.as_view(), name='auth_logout'),
	path('', include(router.urls)),
]