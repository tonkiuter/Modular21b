# Generated by Django 3.2.6 on 2021-10-26 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0013_auto_20211026_1131'),
    ]

    operations = [
        migrations.AlterField(
            model_name='credencialperdida',
            name='FotoIneFrente',
            field=models.ImageField(upload_to=''),
        ),
        migrations.AlterField(
            model_name='credencialperdida',
            name='FotoIneTrasera',
            field=models.ImageField(upload_to=''),
        ),
    ]