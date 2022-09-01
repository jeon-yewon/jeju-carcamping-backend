from django.db import models

# Create your models here.
class Place(models.Model):
    name = models.CharField(max_length=50, default = '')
    lat = models.FloatField(default = '')
    lan = models.FloatField(default = '')
    location = models.CharField(max_length=50, default = '')
    marker = models.CharField(max_length=15, default = '')
    content = models.TextField()
    
    # admin에서 이름으로 출력되게 변경
    def __str__(self):
        return self.name


# 다중 이미지 업로드 설정
class Photo(models.Model):

    # CASCADE : place 삭제 시 사진도 함께 삭제되도록 설정
    # related_name : 데이터 접근 시 이름
    place = models.ForeignKey(Place, on_delete=models.CASCADE, default =None, related_name = 'photo')
    photo = models.ImageField(upload_to="place", blank=True, null=True)


