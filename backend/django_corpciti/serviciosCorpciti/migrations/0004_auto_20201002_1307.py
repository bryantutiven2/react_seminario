# Generated by Django 3.1 on 2020-10-02 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('serviciosCorpciti', '0003_factura_comprobante'),
    ]

    operations = [
        migrations.AlterField(
            model_name='factura',
            name='numero_factura',
            field=models.IntegerField(),
        ),
    ]
