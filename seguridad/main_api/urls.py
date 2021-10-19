from django.urls import path

from .views import ActaAdministrativaDetail, ActaAdministrativaList, BicicletaDetail, BicicletaList, EventoSocialDetail, EventoSocialList, FalloCamaraDetail, FalloCamaraList, IncidenciasDetail, IncidenciasList, PaseSalidaDetail, PaseSalidaList, SolicitudCamDetail,SolicitudCam,UsersDetail, UsersList, VistasDetail, VistasList, RomperCandadoDetail, RomperCandadoList

urlpatterns = [
    path('solcamara', SolicitudCam.as_view(), name='Camaralistcreate'),
    path('solcamara/<int:pk>/', SolicitudCamDetail.as_view(), name='Camaradetailcreate'),
    path('bicicleta', BicicletaList.as_view(), name='listBicicletacreate'),
    path('bicicleta/<int:pk>/', BicicletaDetail.as_view(), name='Bicicletadetailcreate'),
    path('social', EventoSocialList.as_view(), name='listsocialcreate'),
    path('social/<int:pk>/', EventoSocialDetail.as_view(), name='Bicicletasocialcreate'),
    path('camara', FalloCamaraList.as_view(), name='listCamaracreate'),
    path('camara/<int:pk>/', FalloCamaraDetail.as_view(), name='Camaradetailcreate'),
    path('pasesalida', PaseSalidaList.as_view(), name='listPaseSalidacreate'),
    path('pasesalida/<int:pk>/', PaseSalidaDetail.as_view(), name='PaseSalidadetailcreate'),
    path('actaadministrativa', ActaAdministrativaList.as_view(), name='ActaAdministrativalistcreate'),
    path('actaadministrativa/<int:pk>/', ActaAdministrativaDetail.as_view(), name='ActaAdministrativadetailcreate'),
    path('users', UsersList.as_view(), name='Userslistcreate'),
    path('users/<int:pk>/', UsersDetail.as_view(), name='Usersdetailcreate'),
    path('incidencias', IncidenciasList.as_view(), name='Incidenciaslistcreate'),
    path('incidencias/<int:pk>/', IncidenciasDetail.as_view(), name='Incidenciasdetailcreate'),
    path('vistas', VistasList.as_view(), name='Vistaslistcreate'),
    path('vistas/<int:pk>/', VistasDetail.as_view(), name='Incidenciasdetailcreate'),
    path('rompercandado', RomperCandadoList.as_view(), name='RomperCandadolistcreate'),
    path('rompercandado/<int:pk>/', RomperCandadoDetail.as_view(), name='RomperCandadodetailcreate'),
]