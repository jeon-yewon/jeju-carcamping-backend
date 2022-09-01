from django.contrib import admin
from .models import Place, Photo

# Photo 클래스 inline 설정
class PhotoInline(admin.TabularInline):
    model = Photo

# Photo를 관리하는 PlaceAdmin 생성
class PlaceAdmin(admin.ModelAdmin):
    inlines = [PhotoInline, ]

# Register your models here.
admin.site.register(Place, PlaceAdmin)