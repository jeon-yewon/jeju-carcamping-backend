from django.db import models

# Create your models here.
class Place(models.Model):
    name = models.CharField(max_length=50, default = '')
    lat = models.FloatField(default = '')
    lan = models.FloatField(default = '')
    location = models.CharField(max_length=50, default = '')
    content = models.TextField()
    
    # admin에서 이름으로 출력되게 변경
    def __str__(self):
        return self.name