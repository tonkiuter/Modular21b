from django.db import models
from django.db.models.fields import CharField

# Create your models here.
class SolicitudVideoCamaras(models.Model):
    codigoReporte = models.BigIntegerField()
    codigoAlumno = models.BigIntegerField()
    atendio = models.CharField(max_length=30)
    dateSolicitud = models.DateField('date published')
    noCamara = models.BigIntegerField()
    horario = models.CharField(max_length=30)
    hecho = models.CharField(max_length=30)
    fotoIdF = models.CharField(max_length=100)
    fotoIdB = models.CharField(max_length=100)
    
    def __str__(self):
        return self.codigoReporte
    
class Bicicleta(models.Model):
    CodigoReporte = models.BigIntegerField()
    CodigoAlumno = models.BigIntegerField()
    FotoIdF = models.CharField(max_length=30)
    FotoIdB = models.CharField(max_length=30)
    Descripcion = models.CharField(max_length=200)
    
    def __str__(self):
        return self.CodigoReporte

class EventoSocial(models.Model):
    CodigoReporte = models.BigIntegerField()
    NombreEvento = models.CharField(max_length=20)
    FechaHora = models.DateField('date published')
    Pronostico = models.CharField(max_length=100)
    MensajeSeguridad = models.CharField(max_length=100)
    Estrategia = models.CharField(max_length=100)
    Recurso = models.CharField(max_length=100)
    Croquis = models.CharField(max_length=100)
    Organigrama = models.CharField(max_length=100)
    Estado = models.CharField(max_length=100)
    NombreEncargado = models.CharField(max_length=100)
    TelefonoEncargado = models.BigIntegerField()
    CorreoEncargado = models.EmailField()
    
    def __str__(self):
        return self.CodigoReporte
    
class FalloCamara(models.Model):
    CodigoReporte = models.BigIntegerField()
    NoCamara = models.BigIntegerField()
    Informacion = models.CharField(max_length=20)
    IP = models.CharField(max_length=30)
    SITE = models.CharField(max_length=30)
    Modulo = models.CharField(max_length=20)
    Marca = models.CharField(max_length=20)
    DescFalla = models.CharField(max_length=20)
    Toreos = models.IntegerField()
    MateriaUt = models.CharField(max_length=20)
    Solucionado = models.BooleanField()
    Observaciones = models.CharField(max_length=50)
    
    def __str__(self):
        return self.CodigoReporte
        