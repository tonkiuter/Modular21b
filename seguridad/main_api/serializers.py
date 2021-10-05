from django.db.models import fields
from rest_framework import serializers 
from .models import Bicicleta, SolicitudVideoCamaras,EventoSocial,FalloCamara


class SolicitudCamSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolicitudVideoCamaras
        fields = '__all__'
        
class BicicletaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bicicleta
        fields = '__all__'
        
class EventoSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventoSocial
        fields = '__all__'        
        
class FalloCamaraSerializer(serializers.ModelSerializer):
    class Meta:
        model = FalloCamara
        fields = '__all__'