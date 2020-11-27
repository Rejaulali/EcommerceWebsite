import django_filters
from handle_orders.models  import *

class CustomerFilter(django_filters.FilterSet):
	Customer_id = django_filters.NumberFilter(field_name ='id', lookup_expr = 'iexact')
	name = django_filters.CharFilter(field_name = 'name',lookup_expr='icontains')
	phone = django_filters.CharFilter(field_name = 'phone',lookup_expr='icontains')
	email = django_filters.CharFilter(field_name = 'phone',lookup_expr='icontains')
	date_start = django_filters.DateFilter(field_name='date_created', lookup_expr = 'gte')
	date_end = django_filters.DateFilter(field_name='date_created', lookup_expr = 'lte')
	class Meta:
		models = Customer
		fields = '__all__'