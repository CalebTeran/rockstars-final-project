import django_filters.rest_framework
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from django.shortcuts import get_object_or_404, redirect
from django.template.response import TemplateResponse

from payments import get_payment_model, RedirectNeeded
from paypal.standard.forms import PayPalPaymentsForm

from .models import *
from .serializers import *

def process_payment(request):
    order_id = request.session.get('order_id')
    order = get_object_or_404(Order, id=order_id)
    host = request.get_host()

    paypal_dict = {
        'business': settings.PAYPAL_RECEIVER_EMAIL,
        'amount': '%.2f' % order.total_cost().quantize(
            Decimal('.01')),
        'item_name': 'Order {}'.format(order.id),
        'invoice': str(order.id),
        'currency_code': 'USD',
        'notify_url': 'http://{}{}'.format(host,
                                           reverse('paypal-ipn')),
        'return_url': 'http://{}{}'.format(host,
                                           reverse('payment_done')),
        'cancel_return': 'http://{}{}'.format(host,
                                              reverse('payment_cancelled')),
    }

    form = PayPalPaymentsForm(initial=paypal_dict)
    return render(request, 'ecommerce_app/process_payment.html', {'order': order, 'form': form})


class ShipmentsViewSet(viewsets.ModelViewSet):
    queryset = Shipments.objects.all().order_by('order')
    serializer_class = ShipmentsSerializer
    permission_classes = (permissions.IsAuthenticated, )
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]

class PaymentsViewSet(viewsets.ModelViewSet):
    queryset = Payments.objects.all().order_by('created_at')
    serializer_class = PaymentsSerializer
    permission_classes = (permissions.IsAuthenticated, )
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]

class OrdersViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all().order_by('created_at')
    serializer_class = OrdersSerializer
    permission_classes = (permissions.IsAuthenticated, )
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]

# def payment_details(request, payment_id):
#     payment = get_object_or_404(get_payment_model(), id=payment_id)
#     try:
#         form = payment.get_form(data=request.POST or None)
#     except RedirectNeeded as redirect_to:
#         return redirect(str(redirect_to))
#     return TemplateResponse(request, 'payment.html',
#                             {'form': form, 'payment': payment})