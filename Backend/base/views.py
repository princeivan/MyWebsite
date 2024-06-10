from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework.decorators import api_view

from .models import Hero, About, Projects, Experience, Contact 
from .serializers import HeroSerializer,AboutSerializer,ExperienceSerializer,ProjectsSerializer,ContactSerializer


@api_view(['GET'])
def getHero(request):
    heros = Hero.objects.all()
    serializer = HeroSerializer(heros, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def getAbout(request):
    Myabout = About.objects.all()
    serializer = AboutSerializer(Myabout, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def getExperience(request):
    experiences = Experience.objects.all()
    serializer = ExperienceSerializer(experiences, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def getProject(request):
    project = Projects.objects.all()
    serializer = ProjectsSerializer(project, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def getContact(request):
    Mycontact = Contact.objects.all()
    serializer = ContactSerializer( Mycontact, many=True)
    
    return Response(serializer.data)
    
    


