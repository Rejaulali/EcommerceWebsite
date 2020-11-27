import django_filters
from .models  import *

class ProductFilter(django_filters.FilterSet):
	Product_id = django_filters.NumberFilter(field_name ='id', lookup_expr = 'iexact')
	name = django_filters.CharFilter(field_name = 'name',lookup_expr='icontains')
	quantity_start = django_filters.NumberFilter(field_name='quantity', lookup_expr = 'gte')
	quantity_end = django_filters.NumberFilter(field_name='quantity', lookup_expr = 'lte')
	isFeatured = django_filters.BooleanFilter(field_name='isFeatured')
	isSpecial = django_filters.BooleanFilter(field_name='isSpecial')
	date_start = django_filters.DateFilter(field_name='date', lookup_expr = 'gte')
	date_end = django_filters.DateFilter(field_name='date', lookup_expr = 'lte')
	class Meta:
		models = product
		fields = '__all__'