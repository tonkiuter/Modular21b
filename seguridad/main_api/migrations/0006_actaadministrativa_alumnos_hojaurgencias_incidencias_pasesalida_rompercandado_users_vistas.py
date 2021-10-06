# Generated by Django 3.2.6 on 2021-09-20 04:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0005_fallocamara'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActaAdministrativa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CodigoReporte', models.BigIntegerField()),
                ('CodigoAlumno', models.BigIntegerField()),
                ('NoOficio', models.BigIntegerField()),
                ('Lugar', models.CharField(max_length=255)),
                ('NombreAl', models.CharField(max_length=150)),
                ('Causa', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='alumnos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Codigo', models.BigIntegerField()),
                ('Nombre', models.CharField(max_length=50)),
                ('ApellidoP', models.CharField(max_length=50)),
                ('ApellidoM', models.CharField(max_length=50)),
                ('Carrera', models.CharField(max_length=20)),
                ('Telefono', models.BigIntegerField()),
                ('Nacimiento', models.DateField(verbose_name='date published')),
                ('Correo', models.CharField(max_length=75)),
            ],
        ),
        migrations.CreateModel(
            name='HojaUrgencias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Incidencias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CodigoReporte', models.BigIntegerField()),
                ('CodigoAlumno', models.BigIntegerField()),
                ('FechaHora', models.DateTimeField()),
                ('Ubicacion', models.CharField(max_length=255)),
                ('ObjetosP', models.CharField(max_length=255)),
                ('FotoIdF', models.CharField(max_length=60)),
                ('FotoIdB', models.CharField(max_length=60)),
                ('Estatura', models.DecimalField(decimal_places=2, max_digits=5)),
                ('Apariencia', models.CharField(max_length=255)),
                ('Tez', models.CharField(max_length=255)),
                ('Cabello', models.CharField(max_length=255)),
                ('Ojos', models.CharField(max_length=255)),
                ('Cara', models.CharField(max_length=255)),
                ('Boca', models.CharField(max_length=255)),
                ('TipoRopa', models.CharField(max_length=255)),
                ('Gorra', models.CharField(max_length=255)),
                ('EdadAprox', models.IntegerField()),
                ('Cicatrices', models.CharField(max_length=255)),
                ('Tatuajes', models.CharField(max_length=255)),
                ('Piercings', models.CharField(max_length=255)),
                ('Otra', models.CharField(max_length=255)),
                ('Huida', models.CharField(max_length=255)),
                ('Observacion', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='PaseSalida',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CodigoReporte', models.BigIntegerField()),
                ('CodigoAlumno', models.BigIntegerField()),
                ('FotoIdF', models.CharField(max_length=60)),
                ('FotoIdB', models.CharField(max_length=60)),
                ('Sello', models.CharField(max_length=60)),
                ('Descripcion', models.CharField(max_length=100)),
                ('Fecha', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='RomperCandado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CodigoReporte', models.BigIntegerField()),
                ('NombreAlumno', models.CharField(max_length=150)),
                ('CodigoAlumno', models.BigIntegerField()),
                ('Carrera', models.CharField(max_length=50)),
                ('FotoIdF', models.CharField(max_length=255)),
                ('FotoIdB', models.CharField(max_length=255)),
                ('Descripcion', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nombre', models.CharField(max_length=150)),
                ('Email', models.EmailField(max_length=254)),
                ('EmailVer', models.TimeField()),
                ('Password', models.CharField(max_length=50)),
                ('Token', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Vistas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CodigoReporte', models.BigIntegerField()),
                ('Lugar', models.CharField(max_length=35)),
                ('Departamento', models.CharField(max_length=35)),
                ('Equipo', models.CharField(max_length=35)),
                ('NoEquipo', models.IntegerField()),
                ('Planta', models.IntegerField()),
                ('Agente', models.CharField(max_length=35)),
                ('CapacidadLB', models.IntegerField()),
                ('CapacidadKG', models.IntegerField()),
                ('Soporte', models.CharField(max_length=35)),
                ('UltimaCarga', models.DateField(verbose_name='date published')),
                ('PH', models.IntegerField()),
                ('Activado', models.BooleanField()),
                ('Comentarios', models.CharField(max_length=150)),
                ('Existe', models.BooleanField()),
            ],
        ),
    ]