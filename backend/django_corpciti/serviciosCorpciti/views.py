from django.http import HttpResponse, Http404
from django.db.models import Q
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from django.conf import settings
from django.core.mail import send_mail
from .models import Cliente, Pago, Asesor, Congreso_seminario, Factura
from .serializers import ClienteSerializer, PagoSerializer, AsesorSerializer, CongresoSerializer, FacturaSerializer

class CongresoViewSet(APIView):
    def get(self, request, format=None):
        congresosObj = Congreso_seminario.objects.all()
        serializer = CongresoSerializer(congresosObj, many=True)
        return Response(serializer.data)

class AsesorViewSet(APIView):
    def get(self, request, format=None):
        asesorObj = Asesor.objects.all()
        serializer = AsesorSerializer(asesorObj, many=True)
        return Response(serializer.data)

class PagoViewSet(APIView):
    def get(self, request, format=None):
        pagoObj = Pago.objects.all()
        serializer = PagoSerializer(pagoObj, many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = PagoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FacturaView(APIView):
    def post(self, request, format=None):
        serializer = FacturaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class guardarCliente(APIView):
    def post(self, request, format=None):
        serializer = ClienteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ClienteViewSet(APIView):
    def get_object(self, email, password):
        try:
            return Cliente.objects.get(email = email, password = password)
        except Cliente.DoesNotExist:
            raise Http404
    def get(self, request, email, password, format=None):
        clienteObj = self.get_object(email, password)
        serializer = ClienteSerializer(clienteObj)
        return Response(serializer.data)

class putGetCongreso(APIView):
    def get_object(self, pk):
        try:
            return Congreso_seminario.objects.get(id_congreso_seminario=pk)
        except Congreso_seminario.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        congresoObj = self.get_object(pk)
        serializer = CongresoSerializer(congresoObj)
        return Response(serializer.data)
    def put(self, request, pk, format=None):
        congresoObj = self.get_object(pk)
        serializer = CongresoSerializer(congresoObj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class enviarEmail(APIView):
    def post(self, request, format=None):
        print(request.data)
        subject = '¡Factura por compra de un cupo de un seminario!'
        cliente = request.data['cliente']
        cedula = request.data['cedula']
        email = request.data['email']
        direccion = request.data['direccion']
        fecha = request.data['fecha']
        telefono = request.data['telefono']
        factura = request.data['factura']
        cantidad = "1"
        detalle = request.data['detalle']
        precio = request.data['precio']
        subtotal = request.data['subtotal']
        total = request.data['total']
        message = 'Cliente: ' + cliente + " cedula: " + cedula +'\n'\
                  'Email ' + email +'\n'\
                  'Dirección: ' + direccion + " Fecha:" + fecha +'\n'\
                  'Teléfono: ' + telefono +'\n'\
                  'Factura: ' + factura +'\n'\
                   'Cantidad: ' + cantidad + '    Detalle: ' + detalle + '    Precio: ' + precio +'\n' \
                   'Subtotal: ' + subtotal + '    Iva:   0.12' + '    Total: ' + total + '\n' \
                    '\n Gracias por adquirir el servicio'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [email, ]
        send_mail(subject, message, email_from, recipient_list)
        return Response(status=status.HTTP_201_CREATED)
