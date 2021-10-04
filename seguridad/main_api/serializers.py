from rest_framework import serializers 
from .models import SolicitudVideoCamaras


class SolicitudCamSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolicitudVideoCamaras
        fields = '__all__'