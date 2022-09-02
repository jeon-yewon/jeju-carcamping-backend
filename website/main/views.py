from unicodedata import name
from django.shortcuts import render
from .models import Place, Photo
from django.core import serializers

# Create your views here.
def index(request):
    places = Place.objects.all()
    photos = Photo.objects.all()
    placesjson = serializers.serialize('json', Place.objects.all())

    context = {
        'places': places,
        'placesjson': placesjson,
    }
    return render(request, 'main/index.html', context)

def details(request, pk):
    place = Place.objects.get(pk=pk)
    photo = Photo.objects.filter(place=pk)
    context = {
        'place': place,
        'photo' : photo
    }
    return render(request, 'main/details.html', context)