from django.db.models import fields
from rest_framework import serializers 
from .models import Bicicleta, SolicitudVideoCamaras,EventoSocial,FalloCamara,PaseSalida,ActaAdministrativa,Users,Incidencias,Vistas, RomperCandado, HojaUrgencias, CredencialPerdida, ReporteIncidentesMatPel

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

class PaseSalidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaseSalida
        fields = '__all__'

class ActaAdministrativaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActaAdministrativa
        fields = '__all__'

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class IncidenciasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incidencias
        fields = '__all__'

class VistasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vistas
        fields = '__all__'

class RomperCandadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RomperCandado
        fields = '__all__'

class HojaUrgenciasSerializer(serializers.ModelSerializer):
    class Meta:
        model = HojaUrgencias
        fields = '__all__'
        
class CredencialPerdidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CredencialPerdida
        fields = '__all__'

class ReporteIncidentesMatPelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReporteIncidentesMatPel
        fields = '__all__'