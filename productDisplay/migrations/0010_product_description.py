# Generated by Django 3.1.3 on 2020-11-15 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productDisplay', '0009_product_quantity'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.CharField(default='', max_length=500),
        ),
    ]
