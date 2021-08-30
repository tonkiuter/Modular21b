from django.db import models

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
    