import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio-estudiante', pathMatch: 'full' },
  {
    path: 'inicio-administrador',
    loadChildren: () => import('./pages/inicio-administrador/inicio-administrador.module').then( m => m.InicioAdministradorPageModule)
  },
  {
    path: 'usuarios-lista',
    loadChildren: () => import('./pages/usuarios-lista/usuarios-lista.module').then( m => m.UsuariosListaPageModule)
  },
  {
    path: 'cursos-lista',
    loadChildren: () => import('./pages/cursos-lista/cursos-lista.module').then( m => m.CursosListaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio-estudiante',
    loadChildren: () => import('./pages/inicio-estudiante/inicio-estudiante.module').then( m => m.InicioEstudiantePageModule)
  },
  {
    path: 'asignacion',
    loadChildren: () => import('./pages/asignacion/asignacion.module').then( m => m.AsignacionPageModule)
  },
  {
    path: 'inicio-auxiliar',
    loadChildren: () => import('./pages/inicio-auxiliar/inicio-auxiliar.module').then( m => m.InicioAuxiliarPageModule)
  },
  {
    path: 'cursos-asignados',
    loadChildren: () => import('./pages/cursos-asignados/cursos-asignados.module').then( m => m.CursosAsignadosPageModule)
  },
  {
    path: 'foro',
    loadChildren: () => import('./pages/foro/foro.module').then( m => m.ForoPageModule)
  },
  {
    path: 'agregar-foro',
    loadChildren: () => import('./pages/agregar-foro/agregar-foro.module').then( m => m.AgregarForoPageModule)
  },
  {
    path: 'comentarios-foro',
    loadChildren: () => import('./pages/comentarios-foro/comentarios-foro.module').then( m => m.ComentariosForoPageModule)
  },
  {
    path: 'agregar-comentario',
    loadChildren: () => import('./pages/agregar-comentario/agregar-comentario.module').then( m => m.AgregarComentarioPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./pages/ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'agregar-ticket',
    loadChildren: () => import('./pages/agregar-ticket/agregar-ticket.module').then( m => m.AgregarTicketPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./pages/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'agregar-mensaje',
    loadChildren: () => import('./pages/agregar-mensaje/agregar-mensaje.module').then( m => m.AgregarMensajePageModule)
  },
  {
    path: 'estudiante-actividades',
    loadChildren: () => import('./pages/estudiante-actividades/estudiante-actividades.module').then( m => m.EstudianteActividadesPageModule)
  },
  {
    path: 'notas-actividades',
    loadChildren: () => import('./pages/notas-actividades/notas-actividades.module').then( m => m.NotasActividadesPageModule)
  },
  {
    path: 'estudiante-evaluaciones',
    loadChildren: () => import('./pages/estudiante-evaluaciones/estudiante-evaluaciones.module').then( m => m.EstudianteEvaluacionesPageModule)
  },
  {
    path: 'notas-evaluaciones',
    loadChildren: () => import('./pages/notas-evaluaciones/notas-evaluaciones.module').then( m => m.NotasEvaluacionesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'peticion-correo',
    loadChildren: () => import('./pages/peticion-correo/peticion-correo.module').then( m => m.PeticionCorreoPageModule)
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./pages/recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
