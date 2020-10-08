from django.contrib import admin
from serviciosCorpciti.models import Cliente, Pago, Asesor, Congreso_seminario, Factura

modelos = [Cliente, Pago, Asesor, Congreso_seminario, Factura]

admin.site.register(modelos)
