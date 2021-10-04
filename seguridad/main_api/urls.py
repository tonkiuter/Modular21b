from django.urls import path

from .views import SolicitudCamDetail,SolicitudCam

urlpatterns = [
    path('', SolicitudCam.as_view(), name='listcreate'),
    path('<int:pk>/', SolicitudCamDetail.as_view(), name='detailcreate'),
]