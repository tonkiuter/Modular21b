from django.urls import path

from .views import BicicletaDetail, BicicletaList, EventoSocialDetail, EventoSocialList, FalloCamaraDetail, FalloCamaraList, SolicitudCamDetail,SolicitudCam

urlpatterns = [
    path('solCamara', SolicitudCam.as_view(), name='Camaralistcreate'),
    path('solCamara/<int:pk>/', SolicitudCamDetail.as_view(), name='Camaradetailcreate'),
    path('bicicleta', BicicletaList.as_view(), name='listBicicletacreate'),
    path('bicicleta/<int:pk>/', BicicletaDetail.as_view(), name='Bicicletadetailcreate'),
    path('social', EventoSocialList.as_view(), name='listsocialcreate'),
    path('social/<int:pk>/', EventoSocialDetail.as_view(), name='Bicicletasocialcreate'),
    path('camara', FalloCamaraList.as_view(), name='listCamaracreate'),
    path('camara/<int:pk>/', FalloCamaraDetail.as_view(), name='Camaradetailcreate'),
]