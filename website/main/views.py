from unicodedata import name
from django.shortcuts import render
from .models import Place
from django.core import serializers

# Create your views here.
def index(request):
    places = Place.objects.all()
    placesjson = serializers.serialize('json', Place.objects.all())

    context = {
        'places': places,
        'placesjson': placesjson,
    }
    return render(request, 'main/index.html', context)