from unicodedata import name
from django.shortcuts import render
from .models import Place, Photo
from django.core import serializers

# Create your views here.
def index(request):
    places = Place.objects.all()
    photos = Photo.objects.all()
    placesjson = serializers.serialize('json', Place.objects.all())
    # photosjson = serializers.serialize('json', Photo.objects.all())


    context = {
        'places': places,
        'placesjson': placesjson,
        # 'photos': photos,
        # 'photosjson': photosjson,
    }
    return render(request, 'main/index.html', context)

def details(request, pk):
    place = Place.objects.get(pk=pk)
    # photojson = serializers.serialize('json', Photo.objects.all())
    photo = Photo.objects.filter(place=pk)
    context = {
        # 'place': place,
        # 'name': place.name,
        # 'photojson': photojson,
        'photo' : photo
    }
    return render(request, 'main/details.html', context)