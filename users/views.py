# from django.shortcuts import render
# from django.http import HttpResponse
# from users.forms import AlumnoForm
# from django.contrib.auth import authenticate
# from django.contrib.auth import login as auth_login
# from django.contrib.auth import logout as auth_logout
from users.models import Alumno
from rest_framework import viewsets
from users.serializers import AlumnoSerializer

class AlumnoViewSet(viewsets.ModelViewSet):
	queryset = Alumno.objects.all()
	serializer_class = AlumnoSerializer

# def index(request):
# 	return render(request, 'index.html')

# def cursos(self):
# 	return HttpResponse('Este es el template para los cursos')

# def curso(request, curso_id):
# 	return HttpResponse('Este es el template para el curso %s.' % curso_id)	

# def login(request):
# 	if request.method == 'POST':
# 		password = request.POST['password']
# 		user = authenticate(password=password)
# 		if user:
# 			auth_login(request, user)
# 			return HttpResponse('Login exitoso')
# 		else:
# 			return HttpResponse('Login incorrecto')
# 	else:
# 		return render(request, "login.html")

# def signup(request):
# 	form = AlumnoForm(request.POST)

# 	if form.is_valid():
# 		form.save()
# 		return HttpResponse('Registro exitoso')

# 	return HttpResponse('Este es el template para el registro')
