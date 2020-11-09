from django.contrib.auth.models import User
from django.db import models



class SomeLocationModel(models.Model):
    location = models.CharField(max_length=150)
    name = models.CharField(max_length=150)
    comment = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE)