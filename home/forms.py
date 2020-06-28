from django import forms
import re
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import login, authenticate



class RegistrationForm(forms.Form):  
    firstname = forms.CharField(widget=forms.TextInput(attrs={'id':'firstname','placeholder': 'Họ','required':True,'size':30}),label='')

    lastname = forms.CharField(widget=forms.TextInput(attrs={'id':'lastname','placeholder': 'Tên','required':True,'size':30}),label='')

    username = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Tài Khoản','required':True,'size':30}),label='')

    password1 = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Mật Khẩu','required':True,'type':'password'}),label='')

    password2 = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Nhập Lại Mật Khẩu','required':True,'type':'password'}),label='')

    def clean_password2(self):
        if "password1" in self.cleaned_data:
            password1 = self.cleaned_data["password1"]
            password2 = self.cleaned_data["password2"]
            if password1 == password2 and password1:
                return password2
        raise forms.ValidationError("Mật khẩu không hợp lệ")

    def clean_username(self):
        username = self.cleaned_data['username'].lower()
        if not re.search(r'^\w+', username):
            raise forms.ValidationError("Tên tài khoản có kí tự đặc biệt")
        try:
            User.objects.get(username=username)
        except User.DoesNotExist:
            return username
        raise forms.ValidationError("Tài khoản đã tồn tại")
    
    def save(self):
        user = User.objects.create_user(username=self.cleaned_data['username'].lower(), password=self.cleaned_data['password1'],first_name= self.cleaned_data['firstname'],last_name=self.cleaned_data['lastname'])
