from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.

class Albums(models.Model):
	
    class Type(models.TextChoices):
        PHYSICAL = 'PHYSICAL', _('Physical')
        VIRTUAL = 'VIRTUAL', _('Virtual')

    name = models.TextField(max_length = 225, null = False)
    type = models.CharField(max_length=24, choices=Type.choices, default=Type.VIRTUAL )
    virtual_price = models.DecimalField(max_digits = 15, decimal_places = 2)
    physical_price = models.DecimalField(max_digits = 15, decimal_places = 2)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100,)
    duration = models.DurationField()
    file = models.FileField(upload_to=None, max_length=254)
    #fk genres array genre id´s

class Genre(models.Model):
	name = models.TextField(max_length = 225, null = False)

class Authors(models.Model):
	name = models.TextField(max_length = 225, null = False)
	nationality = models.TextField(max_length = 225, null = False)
	albums = models.TextField(max_length = 225, null = False)
	image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100,)
   #top field array of songs id´s 

class Songs(models.Model):
    name = models.TextField(max_length = 225, null = False)
    duration = models.DurationField()
    file = models.FileField(upload_to=None, max_length=254)
    is_single = models.BooleanField(default=False)
    price = models.DecimalField(max_digits = 10, decimal_places = 2)
    # fk albumid
    #fk2 authors array id´s