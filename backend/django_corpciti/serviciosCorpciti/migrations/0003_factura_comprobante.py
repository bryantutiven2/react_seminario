# Generated by Django 3.1 on 2020-10-02 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('serviciosCorpciti', '0002_auto_20201001_2054'),
    ]

    operations = [
        migrations.AddField(
            model_name='factura',
            name='comprobante',
            field=models.ImageField(blank=True, max_length=200, null=True, upload_to='comprobante'),
        ),
    ]
