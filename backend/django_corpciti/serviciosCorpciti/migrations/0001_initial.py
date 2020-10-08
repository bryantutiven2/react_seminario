# Generated by Django 3.1 on 2020-10-02 01:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Asesor',
            fields=[
                ('id_asesor', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('codigo', models.CharField(max_length=45)),
                ('nombre_asesor', models.CharField(max_length=45)),
                ('apellido_asesor', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id_cliente', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('nombre', models.CharField(max_length=45)),
                ('apellido', models.CharField(max_length=45)),
                ('cedula', models.CharField(max_length=10)),
                ('telefono', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Congreso_seminario',
            fields=[
                ('id_congreso_seminario', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('nombre_congreso', models.CharField(max_length=45)),
                ('detalle', models.CharField(max_length=200)),
                ('direccion', models.CharField(max_length=45)),
                ('imagen', models.ImageField(blank=True, max_length=200, null=True, upload_to='logos')),
                ('fecha', models.DateField()),
                ('cupos', models.IntegerField()),
                ('precio', models.FloatField()),
                ('id_asesor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='serviciosCorpciti.asesor')),
            ],
        ),
        migrations.CreateModel(
            name='Pago',
            fields=[
                ('id_pago', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('tipo_pago', models.CharField(max_length=45)),
                ('fecha_pago', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Factura',
            fields=[
                ('id_factura', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('numero_factura', models.ImageField(upload_to='')),
                ('iva', models.FloatField(default=0.12)),
                ('subtotal', models.FloatField()),
                ('total', models.FloatField()),
                ('id_cliente', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='serviciosCorpciti.asesor')),
                ('id_congreso_seminario', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='serviciosCorpciti.congreso_seminario')),
                ('id_pago', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='serviciosCorpciti.pago')),
            ],
        ),
    ]