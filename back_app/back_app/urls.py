from django.contrib import admin
# Swagger changes
from django.urls import path, include, re_path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


# Graphql URLs
urlpatterns = [
    path('v1/graphql', GraphQLView.as_view(graphiql=True)),
    path('v1/graphql', csrf_exempt(GraphQLView.as_view(graphiql=True))),
] 

# JWT URLs
urlpatterns += [
    path('v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] 

# JWT URLs
urlpatterns += [
    path('v1/paypal/', include('paypal.standard.ipn.urls')),
] 

#Apps endpoinds
urlpatterns += [
    path('admin/', admin.site.urls),
    path('v1/market/', include('market.urls')),
    path('v1/music/', include('music.urls')),
    path('v1/auth/', include('rest_framework.urls')),
    path('v1/users/', include('users.urls')),
]


# Swagger URLs
schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   # permission_classes=[permissions.AllowAny],
)
urlpatterns += [
   re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

# #Mercado pago
# urlpatterns += [
#     url(r'^mercadopago/', include('django_mercadopago.urls'), namespace='mp'),
# # Make sure namespace is 'mp', since we assume it is for notification URL
# # contruction.
# ]
