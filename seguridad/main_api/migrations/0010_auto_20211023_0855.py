# Generated by Django 3.2.6 on 2021-10-23 13:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0009_auto_20211019_1434'),
    ]

    operations = [
        migrations.CreateModel(
            name='CredencialPerdida',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('NombreA', models.CharField(max_length=150)),
                ('Carrera', models.CharField(max_length=100)),
                ('Codigo', models.BigIntegerField()),
                ('FechaYHora', models.DateTimeField(auto_now=True)),
                ('FotoIneFrente', models.CharField(max_length=100)),
                ('FotoIneTrasera', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='ReporteIncidentesMatPel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Fecha', models.DateTimeField(auto_now=True)),
                ('Ubicacion', models.CharField(max_length=150)),
                ('Fenomeno', models.CharField(max_length=100)),
                ('Descripcion', models.CharField(max_length=250)),
                ('Evaluacion', models.CharField(max_length=250)),
                ('Tareas', models.CharField(max_length=250)),
                ('Recursos', models.CharField(max_length=250)),
                ('Estrategias', models.CharField(max_length=250)),
            ],
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Abdomen',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Adscripcion',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Alergias',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Asma',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='AsmaDiagnostico',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='AsmaTratamiento',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='CDU',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='CRM',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='CUCEI',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='CabezaCuello',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Cardiopulmonar',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Cargo',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Cirugias',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Codigo',
            field=models.BigIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Condicion',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Diabetes',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='DiabetesDiagnostico',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='DiabetesTratamiento',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Diagnostico',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Edad',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Epilepsia',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='EpilepsiaDiagnostico',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='EpilepsiaTratamiento',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='EscalaGlasgow',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Exterior',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Extremidades',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='FC',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='FR',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Fecha',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Glucosa',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Hipertension',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='HipertensionDiagnostico',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='HipertensionTratamiento',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='IMSS',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='ISSSTE',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Neurologico',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='NoAmerita',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='NoTelefono',
            field=models.BigIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Nombre',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='POLI',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='PRIVADO',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Padecimiento',
            field=models.CharField(default='', max_length=250),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Prepa12',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='PronostioS',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='SMM',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Sangre',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Saturacion',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='SeNiega',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Temperatura',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='TensionArterial',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='TrasladoCUCEI',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Tratamiento',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='Ubicacion',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='hojaurgencias',
            name='VOCA',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='rompercandado',
            name='Fecha',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='incidencias',
            name='FechaHora',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='pasesalida',
            name='Fecha',
            field=models.DateField(auto_now_add=True),
        ),
    ]