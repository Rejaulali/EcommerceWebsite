# Generated by Django 3.1.1 on 2020-10-08 06:06

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('productDisplay', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 8, 6, 6, 11, 245595, tzinfo=utc)),
        ),
    ]
