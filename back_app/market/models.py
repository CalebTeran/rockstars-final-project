from django.db import models
from django.utils.translation import gettext_lazy as _
#from payments import PurchasedItem
#from payments.models import BasePayment

from typing import Iterable
from decimal import Decimal
# Create your models here.

class Orders(models.Model):
    total = models.DecimalField(max_digits = 15, decimal_places = 2)
    subtotal = models.DecimalField(max_digits = 10, decimal_places = 2)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True,null=True)
    need_shipment = models.BooleanField(default=False)
    albums_id = models.TextField(max_length = 255, null = True)
	# books_authors = models.OneToOneField(Author, through='BookAuthor')

class Shipments(models.Model):
    class Status(models.TextChoices):
        COMPLETED = 'COMPLETED', _('Completed')
        ON_WAY = 'ON_WAY', _('On way')
        DIGITAL = 'DIGITAL', _('Digital')
        IN_PROCESS = 'IN_PROCESS', _('In process')
	
    status = models.CharField(max_length=24, choices=Status.choices, default=Status.IN_PROCESS )

class Payments(models.Model):

    class Status(models.TextChoices):
        PAID = 'PAID', _('Paid')
        IN_PROCESS = 'IN_PROCESS', _('In process')
        PENDING = 'PENDING', _('Pending')
        CANCEL = 'CANCEL', _('Cancel')

    class Methods(models.TextChoices):
        CARD = 'CARD', _('Card')
        DEBIT_CARD = 'DEBIT_CARD', _('Debit card')
        OTHER = 'OTHER', _('Other')

    status = models.CharField(max_length=24, choices=Status.choices, default=Status.PAID )
    payment_method = models.CharField(max_length=24, choices=Methods.choices, default=Methods.CARD )
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    # books_authors = models.OneToOneField(Author, through='BookAuthor')
    # def get_failure_url(self) -> str:
    #     # Return a URL where users are redirected after
    #     # they fail to complete a payment:
    #     return 'http://example.com/failure/'

    # def get_success_url(self) -> str:
    #     # Return a URL where users are redirected after
    #     # they successfully complete a payment:
    #     return 'http://example.com/success/'

    # def get_purchased_items(self) -> Iterable[PurchasedItem]:
    #     # Return items that will be included in this payment.
    #     yield PurchasedItem(
    #         name='The Hound of the Baskervilles',
    #         sku='BSKV',
    #         quantity=9,
    #         price=Decimal(10),
    #         currency='USD',
    #     )