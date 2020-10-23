from django.db import models

class Cliente(models.Model):
    id_cliente = models.AutoField(primary_key = True, unique=True)
    nombre = models.CharField(max_length= 50)
    email = models.EmailField(max_length=100, default=None, null=True, blank=True)
    password = models.CharField(max_length=20, default=None, null=True, blank=True)
    apellido = models.CharField(max_length= 45)
    cedula = models.CharField(max_length= 10)
    telefono = models.CharField(max_length=15)

class Asesor(models.Model):
    id_asesor = models.AutoField(primary_key = True, unique=True)
    codigo = models.CharField(max_length=45)
    nombre_asesor = models.CharField(max_length=45)
    apellido_asesor = models.CharField(max_length=45)

class Congreso_seminario(models.Model):
    id_congreso_seminario = models.AutoField(primary_key = True, unique=True)
    nombre_congreso = models.CharField(max_length=45)
    detalle = models.CharField(max_length=200)
    direccion = models.CharField(max_length=45)
    imagen = models.ImageField(upload_to='logos', max_length=200, null=True, blank=True)
    banco = models.CharField(max_length=100, null=True, blank=True)
    numero_cuenta = models.CharField(max_length=100, null=True, blank=True)
    fecha = models.DateField()
    cupos = models.IntegerField()
    precio = models.FloatField()
    id_asesor = models.ForeignKey(Asesor, on_delete=models.PROTECT, null=True, blank=True)

class Pago(models.Model):
    id_pago = models.AutoField(primary_key = True, unique=True)
    tipo_pago = models.CharField(max_length=45)
    fecha_pago = models.CharField(max_length=45)

class Factura(models.Model):
    id_factura = models.AutoField(primary_key = True, unique=True)
    numero_factura = models.IntegerField()
    numero_deposito = models.CharField(max_length=100, null=True, blank=True)
    iva = models.FloatField(default=0.12)
    subtotal = models.FloatField()
    total = models.FloatField()
    comprobante = models.ImageField(upload_to='comprobante', max_length=200, null=True, blank=True)
    id_pago = models.ForeignKey(Pago, on_delete=models.PROTECT, null=True, blank=True)
    id_cliente = models.ForeignKey(Asesor, on_delete=models.PROTECT, null=True, blank=True)
    id_congreso_seminario = models.ForeignKey(Congreso_seminario, on_delete=models.PROTECT, null=True, blank=True)


