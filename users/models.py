from django.db import models
from django.core.validators import *

class Alumno(models.Model):
	password = models.CharField(max_length=4)

	def __unicode__(self):
		return self.password