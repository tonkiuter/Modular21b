from django.utils import timezone
from django.db import models
from django.db.models.fields import CharField

# Create your models here.
class SolicitudVideoCamaras(models.Model):
    codigoAlumno = models.BigIntegerField()
    atendio = models.CharField(max_length=30)
    dateSolicitud = models.DateTimeField(default=timezone.now)
    noCamara = models.BigIntegerField()
    horario = models.CharField(max_length=30)
    hecho = models.CharField(max_length=30)
    fotoIdF = models.CharField(max_length=100)
    fotoIdB = models.CharField(max_length=100)
    
    def __str__(self):
        return self.codigoReporte
    
class Bicicleta(models.Model):
    CodigoAlumno = models.BigIntegerField()
    FotoIdF = models.CharField(max_length=30)
    FotoIdB = models.CharField(max_length=30)
    Descripcion = models.CharField(max_length=200)
    
    def __str__(self):
        return self.CodigoReporte

class EventoSocial(models.Model):
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
        
class HojaUrgencias(models.Model):
    

    def __str__(self):
        return self.HojaUrgencias

class Vistas(models.Model):
    Lugar = models.CharField(max_length = 35)
    Departamento = models.CharField(max_length = 35)
    Equipo = models.CharField(max_length = 35)
    NoEquipo = models.IntegerField()
    Planta = models.IntegerField()
    Agente =  models.CharField(max_length = 35)
    CapacidadLB = models.IntegerField()
    CapacidadKG = models.IntegerField()
    Soporte = models.CharField(max_length = 35)
    UltimaCarga = models.DateField('date published')
    PH = models.IntegerField()
    Activado = models.BooleanField()
    Comentarios = models.CharField(max_length = 150)
    Existe = models.BooleanField()

    def __str__(self):
        return self.Vistas

class RomperCandado(models.Model):
    NombreAlumno = models.CharField(max_length = 150)
    CodigoAlumno = models.BigIntegerField()
    Carrera = models.CharField(max_length = 50)
    FotoIdF = models.CharField(max_length = 255)
    FotoIdB = models.CharField(max_length = 255)
    Descripcion = models.CharField(max_length = 255)

    def __str__(self):
        return self.RomperCandado

class alumnos(models.Model):
    Codigo = models.BigIntegerField()
    Nombre = models.CharField(max_length = 50)
    ApellidoP = models.CharField(max_length = 50)
    ApellidoM = models.CharField(max_length = 50)
    Carrera = models.CharField(max_length = 20)
    Telefono = models.BigIntegerField()
    Nacimiento = models.DateField('date published')
    Correo = models.CharField(max_length = 75)

    def __str__(self):
        return self.alumnos

class PaseSalida(models.Model):
    CodigoAlumno = models.BigIntegerField()
    FotoIdF = models.CharField(max_length = 60)
    FotoIdB = models.CharField(max_length = 60)
    Sello = models.CharField(max_length = 60)
    Descripcion = models.CharField(max_length= 100)
    Fecha = models.DateField()
    def __str__(self):
        return self.PaseSalida

class ActaAdministrativa(models.Model):
    CodigoAlumno = models.BigIntegerField()
    NoOficio = models.BigIntegerField()
    Lugar = models.CharField(max_length = 255)
    NombreAl = models.CharField(max_length = 150)
    Causa = models.CharField(max_length = 300)
    def __str__(self):
        return self.ActaAdministrativa

class Users(models.Model):
    Nombre = models.CharField(max_length = 150)
    Email = models.EmailField()
    EmailVer = models.TimeField()
    Password = models.CharField(max_length = 50)
    Token = models.CharField(max_length = 100)
    def __str__(self):
        return self.Users

class Incidencias(models.Model):
    CodigoAlumno = models.BigIntegerField()
    FechaHora = models.DateTimeField()
    Ubicacion = models.CharField(max_length= 255)
    ObjetosP = models.CharField(max_length= 255)
    FotoIdF = models.CharField(max_length = 60)
    FotoIdB = models.CharField(max_length = 60)
    Estatura = models.DecimalField(decimal_places= 2, max_digits=5)
    Apariencia = models.CharField(max_length= 255)
    Tez = models.CharField(max_length= 255)
    Cabello = models.CharField(max_length= 255)
    Ojos = models.CharField(max_length= 255)
    Cara = models.CharField(max_length= 255)
    Boca = models.CharField(max_length= 255)
    TipoRopa = models.CharField(max_length= 255)
    Gorra = models.CharField(max_length= 255)
    EdadAprox = models.IntegerField()
    Cicatrices = models.CharField(max_length= 255)
    Tatuajes = models.CharField(max_length= 255)
    Piercings = models.CharField(max_length= 255)
    Otra = models.CharField(max_length= 255)
    Huida = models.CharField(max_length= 255)
    Observacion = models.CharField(max_length= 255)
    def __str__(self):
        return self.Incidencias
