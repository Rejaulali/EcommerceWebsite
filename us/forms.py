from django import forms
from .models import * 
class ContactForm(forms.ModelForm):
	query = forms.CharField(widget=forms.Textarea)
	class Meta:
		model = Contact
		fields = '__all__'