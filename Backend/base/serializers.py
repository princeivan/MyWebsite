from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, SerializerMethodField 
from .models import Hero,About,Experience,Projects,Contact,Tech# end alternate constructor

class HeroSerializer(ModelSerializer):
    class Meta:
        model = Hero
        fields = '__all__'
        
        
class AboutSerializer(ModelSerializer):
    class Meta:
        model = About 
        fields ='__all__'
        
        
class TechSerializer(ModelSerializer)    :
    class Meta:
        model = Tech
        fields = ['title']    
        
class ExperienceSerializer(ModelSerializer):
    Technologies = TechSerializer(many=True, read_only=True)
    class Meta:
        model = Experience
        fields = '__all__'
        
class ProjectsSerializer(ModelSerializer):
    Technologies = TechSerializer(many=True, read_only=True)
    class Meta:
        model = Projects
        fields = '__all__'
        
        
class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact 
        fields = '__all__'
    