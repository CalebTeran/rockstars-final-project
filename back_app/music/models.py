from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import MaxValueValidator, MinValueValidator

class Genres(models.Model):
    name = models.TextField(max_length = 225, null = False)

class Albums(models.Model):
	
    class Type(models.TextChoices):
        PHYSICAL = 'PHYSICAL', _('Physical')
        VIRTUAL = 'VIRTUAL', _('Virtual')
        BOTH = 'BOTH', _('Both')

    name = models.TextField(max_length = 225, null = False)
    type = models.CharField(max_length=24, choices=Type.choices, default=Type.BOTH )
    virtual_price = models.DecimalField(max_digits = 15, decimal_places = 2, default= 0.00)
    physical_price = models.DecimalField(max_digits = 15, decimal_places = 2, default= 0.00)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    image = models.TextField(null=False, default= 0)
    file = models.TextField(null=False, default= 0)
    duration = models.DurationField()
    stock = models.IntegerField( validators=[MinValueValidator(0), MaxValueValidator(100)], default= 0.00)
    genres = models.ForeignKey(Genres, on_delete= models.DO_NOTHING)

class Authors(models.Model):
    name = models.TextField(max_length = 225, null = False)
    nationality = models.TextField(max_length = 225, null = False)
    albums = models.TextField(max_length = 225, null = False)
    image = models.TextField(null=False, default= 0)
    alumbs = models.ForeignKey(Albums, on_delete= models.DO_NOTHING)

class Songs(models.Model):
    name = models.TextField(max_length = 225, null = False)
    duration = models.DurationField()
    image = models.TextField(null=False, default= 0)
    is_single = models.BooleanField(default=False)
    file = models.TextField(null=False, default= 0)
    price = models.DecimalField(max_digits = 10, decimal_places = 2)
    stock = models.IntegerField( validators=[MinValueValidator(0), MaxValueValidator(100)], default= 0.00)
    authors = models.ForeignKey(Authors, on_delete= models.DO_NOTHING)
