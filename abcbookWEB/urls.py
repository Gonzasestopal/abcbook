# from django.conf.urls import include, url, patterns
# from django.contrib import admin
# from users.views import signup, login, index, cursos, curso
# from django.conf import settings


# urlpatterns = [
#     url(r'^admin/', include(admin.site.urls)),
#     url(r'^signup/', signup, name='signup'),
#     url(r'^accounts/login/', login, name='login'),
#     url(r'^$', index, name='index'),
#     url(r'^cursos/', cursos, name='cursos'),
#     url(r'^curso/(?P<curso_id>[0-9]+)/$', curso, name='curso'),
# ]

from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from users.views import AlumnoViewSet

router = routers.DefaultRouter()
router.register(r'api/alumnos', AlumnoViewSet)

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(router.urls)),

]
