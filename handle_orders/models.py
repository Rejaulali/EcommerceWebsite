from django.db import models
from django.contrib.auth.models  import User
# Create your models here.
class Customer(models.Model):
    user = models.OneToOneField(User,on_delete = models.CASCADE, default="")
    name = models.CharField(max_length=100, null = True)
    phone = models.CharField(max_length=100, null = True)
    email = models.CharField(max_length=100, null = True)
    address = models.CharField(max_length=500, null = True)
    profile_pic = models.ImageField(upload_to = "profile_pic",default="profile_pic/profile.png")
    date_created = models.DateField(auto_now_add = True, null = True )
    def __str__(self):
        return self.name


class Order(models.Model):
    STATUS = (
        ('Pending','Pending'),
        ('Out for Delivery','Out for Delivery'),
        ('Delivered','Delivered')
        )
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null = True)
    status = models.CharField(max_length = 100, default = "Pending",choices = STATUS)
    order_description = models.CharField(max_length = 500, default = "")
    delivery_address = models.CharField(max_length = 500, default = "")
    order_bill = models.CharField(max_length=100, default="")
    date_created = models.DateTimeField(auto_now_add = True, null = True)