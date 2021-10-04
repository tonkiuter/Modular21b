from .models import SolicitudVideoCamaras, Bicicleta
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import BicicletaSerializer, SolicitudCamSerializer
# Create your views here.


class SolicitudCam(generics.ListCreateAPIView):
    queryset = SolicitudVideoCamaras.objects.all()
    serializer_class = SolicitudCamSerializer

class SolicitudCamDetail(generics.RetrieveDestroyAPIView):
    queryset = SolicitudVideoCamaras.objects.all()
    serializer_class = SolicitudCamSerializer
    
    

class BicicletaList(generics.ListCreateAPIView):
    queryset = Bicicleta.objects.all()
    serializer_class = BicicletaSerializer

class BicicletaDetail(generics.RetrieveDestroyAPIView):
    queryset = SolicitudVideoCamaras.objects.all()
    serializer_class = BicicletaSerializer

def index(request):
    return HttpResponse("Hello, world. You're at the main_api index.")