from django.urls import path

from .views import ActaAdministrativaDetail, ActaAdministrativaList, BicicletaDetail, BicicletaList, EventoSocialDetail, EventoSocialList, FalloCamaraDetail, FalloCamaraList, IncidenciasDetail, IncidenciasList, PaseSalidaDetail, PaseSalidaList, SolicitudCamDetail,SolicitudCam,UsersDetail, UsersList

urlpatterns = [
    path('solCamara', SolicitudCam.as_view(), name='Camaralistcreate'),
    path('solCamara/<int:pk>/', SolicitudCamDetail.as_view(), name='Camaradetailcreate'),
    path('bicicleta', BicicletaList.as_view(), name='listBicicletacreate'),
    path('bicicleta/<int:pk>/', BicicletaDetail.as_view(), name='Bicicletadetailcreate'),
    path('social', EventoSocialList.as_view(), name='listsocialcreate'),
    path('social/<int:pk>/', EventoSocialDetail.as_view(), name='Bicicletasocialcreate'),
    path('camara', FalloCamaraList.as_view(), name='listCamaracreate'),
    path('camara/<int:pk>/', FalloCamaraDetail.as_view(), name='Camaradetailcreate'),
    path('pasesalida', PaseSalidaList.as_view(), name='listPaseSalidacreate'),
    path('pasesalida/<int:pk>/', PaseSalidaDetail.as_view(), name='PaseSalidadetailcreate'),
    path('ActaAdministrativa', ActaAdministrativaList.as_view(), name='ActaAdministrativalistcreate'),
    path('ActaAdministrativa/<int:pk>/', ActaAdministrativaDetail.as_view(), name='ActaAdministrativadetailcreate'),
    path('Users', UsersList.as_view(), name='Userslistcreate'),
    path('Users/<int:pk>/', UsersDetail.as_view(), name='Usersdetailcreate'),
    path('Incidencias', IncidenciasList.as_view(), name='Incidenciaslistcreate'),
    path('Incidencias/<int:pk>/', IncidenciasDetail.as_view(), name='Incidenciasdetailcreate'),
]