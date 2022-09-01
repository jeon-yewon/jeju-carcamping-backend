from django.contrib import admin
from django.urls import path
from main.views import index, details
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('details/<int:pk>/', details)
]

urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)