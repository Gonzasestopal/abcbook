from django.conf.urls import patterns, include, url
from rest_framework import routers
from . import views

todo_router = routers.DefaultRouter(trailing_slash=False)
todo_router.register(r'alumnos', views.AlumnoViewSet, base_name='alumnos')

urlpatterns = [
	# Send base.html to angular
    url(r'^$', views.index, name='index'),

    url('^api/', include(todo_router.urls)),
]