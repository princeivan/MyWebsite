from django.urls import path 
from . import views


urlpatterns = [
    path('',views.getHero, name='hero'),
    path('about/',views.getAbout, name='about'),
    path('experience/',views.getExperience, name='experience'),
    path('my-project/',views.getProject, name='project'),
    path('my-contact/',views.getContact, name='contact'),
  
]
