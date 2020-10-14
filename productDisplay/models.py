from django.db import models
from django.utils import timezone
# Create your models here.
class product(models.Model):
    name = models.CharField(max_length=100,default="")
    category = models.CharField(max_length = 100, default="")
    quantity = models.IntegerField(default=0)
    actual_price = models.IntegerField(default=0)
    discount_price = models.IntegerField(default=0)
    isFeatured = models.BooleanField(default = False)
    isSpecial = models.BooleanField(default = False)
    date = models.DateTimeField(auto_now=timezone.now)
    image = models.ImageField(upload_to = "products",default="")