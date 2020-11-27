from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from handle_orders.models import * 
class CreateUserForm(UserCreationForm):
	class Meta:
		model = User
		fields = ['username','email','password1','password2']


class UpdateProfileForm(ModelForm):
	class Meta:
		model = Customer
		fields = '__all__'
		exclude = ['user']


class CreateCustomerForm(ModelForm):
	class Meta:
		model = Customer
		fields = '__all__'
