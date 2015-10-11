from users.models import Alumno
from rest_framework import serializers
from abcbookWEB import settings

class AlumnoSerializer(serializers.HyperlinkedModelSerializer):

	class Meta:
		model = Alumno
		fields = ['id','password']