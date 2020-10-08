from django.urls import path
from django.conf.urls import include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter
from serviciosCorpciti import views

urlpatterns = [
    path('get_congresos/', views.CongresoViewSet.as_view()),
    path('get_asesores/', views.AsesorViewSet.as_view()),
    path('get_pagos/', views.PagoViewSet.as_view()),
    path('obtener_clientes/<str:email>/<str:password>/', views.ClienteViewSet.as_view()),
    path('post_factura/', views.FacturaView.as_view()),
    path('put_get_congreso/<str:pk>/', views.putGetCongreso.as_view()),
    path('guardar_cliente/', views.guardarCliente.as_view()),
    path('enviar_correo/', views.enviarEmail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)