from django.db import models


class Hero(models.Model):
    name = models.CharField(max_length=250)
    title = models.CharField(max_length=250)
    image=models.ImageField()
    body = models.TextField()
    
    def __str__(self):
        return self.name
    
    @property
    def get_image_url(self) -> str:
       if self.image and hasattr(self.image, 'url'):
           return f"http://localhost:8000{self.image.url}"
      
class About(models.Model):
    image =models.ImageField()
    body = models.TextField()
    
    def __str__(self):
        return self.body[:50]
    
class Tech(models.Model):
    title = models.CharField(max_length=250)
    
    def __str__(self):
        return self.title
    
class Experience(models.Model):
    year = models.CharField(max_length=250)
    title = models.CharField(max_length=250)
    company =  models.CharField(max_length=250)
    Roles =  models.TextField(null=True, blank=True)
    Technologies = models.ManyToManyField(Tech, related_name="experience_technology")
    
    def __str__(self):
        return self.title
     
class Projects(models.Model):
    image =models.ImageField()
    title = models.CharField(max_length=250)
    description =  models.TextField(null=True, blank=True)
    Technologies = models.ManyToManyField(Tech, related_name="project_technology")
    
    def __str__(self):
        return self.title
     
class Contact(models.Model):
    Phone_No =models.IntegerField()
    Email = models.EmailField()
    Address = models.CharField(max_length=250)
    
    def __str__(self):
        return self.Address
     
     

    