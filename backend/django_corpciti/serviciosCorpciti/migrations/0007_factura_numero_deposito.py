# Generated by Django 3.1 on 2020-10-03 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('serviciosCorpciti', '0006_auto_20201003_1601'),
    ]

    operations = [
        migrations.AddField(
            model_name='factura',
            name='numero_deposito',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
