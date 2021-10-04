from django.db.models import fields
from rest_framework import serializers 
from .models import Bicicleta, SolicitudVideoCamaras


class SolicitudCamSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolicitudVideoCamaras
        fields = '__all__'
        
class BicicletaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bicicleta
        fields = '__all__'