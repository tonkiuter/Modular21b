from django.urls import path

from .views import BicicletaDetail, BicicletaList, SolicitudCamDetail,SolicitudCam

urlpatterns = [
    path('solCamara', SolicitudCam.as_view(), name='Camaralistcreate'),
    path('solCamara/<int:pk>/', SolicitudCamDetail.as_view(), name='Camaradetailcreate'),
    path('bicicleta', BicicletaList.as_view(), name='listBicicletacreate'),
    path('bicicleta/<int:pk>/', BicicletaDetail.as_view(), name='Bicicletadetailcreate'),
]