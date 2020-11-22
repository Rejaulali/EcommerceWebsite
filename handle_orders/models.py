from django.db import models

# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=100, null = True)
    phone = models.CharField(max_length=100, null = True)
    email = models.CharField(max_length=100, null = True)
    date_created = models.DateTimeField(auto_now_add = True, null = True )
    def __str__(self):
        return self.name


class Order(models.Model):
    STATUS = (
        ('Pending','Pending'),
        ('Out for Delivery','Out for Delivery'),
        ('Delivered','Delivered')
        )
    status = models.CharField(max_length = 100, default = "",choices = STATUS)
    order_description = models.CharField(max_length = 500, default = "")
    delivery_address = models.CharField(max_length = 500, default = "")
    date_created = models.DateTimeField(auto_now_add = True, null = True)