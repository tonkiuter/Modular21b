# Generated by Django 3.2.6 on 2021-09-05 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0003_bicicleta'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventoSocial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CodigoReporte', models.BigIntegerField()),
                ('NombreEvento', models.CharField(max_length=20)),
                ('FechaHora', models.DateField(verbose_name='date published')),
                ('Pronostico', models.CharField(max_length=100)),
                ('MensajeSeguridad', models.CharField(max_length=100)),
                ('Estrategia', models.CharField(max_length=100)),
                ('Recurso', models.CharField(max_length=100)),
                ('Croquis', models.CharField(max_length=100)),
                ('Organigrama', models.CharField(max_length=100)),
                ('Estado', models.CharField(max_length=100)),
                ('NombreEncargado', models.CharField(max_length=100)),
                ('TelefonoEncargado', models.BigIntegerField()),
                ('CorreoEncargado', models.EmailField(max_length=254)),
            ],
        ),
    ]
