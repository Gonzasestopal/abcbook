from django import forms
from users.models import Alumno

class AlumnoForm(forms.ModelForm):
	class Meta:
		model = Alumno
		fields = ['password']