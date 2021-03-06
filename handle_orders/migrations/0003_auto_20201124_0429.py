# Generated by Django 3.1.3 on 2020-11-24 04:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('handle_orders', '0002_auto_20201123_1903'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='address',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='customer',
            name='profile_pic',
            field=models.ImageField(default='', upload_to='profile_pic'),
        ),
        migrations.AddField(
            model_name='customer',
            name='user',
            field=models.OneToOneField(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
