# Generated by Django 3.2.6 on 2021-10-26 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0014_auto_20211026_1134'),
    ]

    operations = [
        migrations.AlterField(
            model_name='solicitudvideocamaras',
            name='fotoIdB',
            field=models.ImageField(upload_to='SolicitudID'),
        ),
        migrations.AlterField(
            model_name='solicitudvideocamaras',
            name='fotoIdF',
            field=models.ImageField(upload_to='SolicitudID'),
        ),
    ]
