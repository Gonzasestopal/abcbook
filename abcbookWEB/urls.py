from django.conf.urls import patterns, include, url
from django.contrib import admin


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_drf_starter_project.views.home', name='home'),

    url(r'^/?', include('users.urls')),

    url(r'^admin/', include(admin.site.urls)),
)

