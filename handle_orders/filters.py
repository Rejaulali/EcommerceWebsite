import django_filters
from .models  import *
STATUS_CHOICES = (
        ('Pending','Pending'),
        ('Out for Delivery','Out for Delivery'),
        ('Delivered','Delivered')
        )

class OrderFilter(django_filters.FilterSet):
	Order_id = django_filters.NumberFilter(field_name ='id', lookup_expr = 'iexact')
	status = django_filters.ChoiceFilter(choices=STATUS_CHOICES)
	start_date = django_filters.DateFilter(field_name = 'date_created',lookup_expr = 'gte')
	end_date = django_filters.DateFilter(field_name = 'date_created',lookup_expr = 'lte')
	class Meta:
		models = Order
		fields = '__all__'