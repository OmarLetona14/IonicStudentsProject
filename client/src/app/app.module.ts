import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { UsuariosService } from './services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { CursosService } from './services/cursos.service';
import { HorariosService } from './services/horarios.service';
import { SeccionesService } from './services/secciones.service';
import { AsignacionesService } from './services/asignaciones.service';
import { MensajesService } from './services/mensajes.service';
import { ComentariosService } from './services/comentarios.service';
import { AsistenciasService } from './services/asistencias.service';
import { TicketsService } from './services/tickets.service';
import { ActividadesService } from './services/actividades.service';
import { ActividadesAsignadasService } from './services/actividades-asignadas.service';
import { RespuestasService } from './services/respuestas.service';
import { EvaluacionesService } from './services/evaluaciones.service';
import { PreguntasService } from './services/preguntas.service';
import { EvaluacionesAlumnoService } from './services/evaluaciones-alumno.service';
import { RespuestaPreguntaService } from './services/respuesta-pregunta.service';
import { RespuestasEvaluacionService } from './services/respuestas-evaluacion.service';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule, HttpClientModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    UsuariosService,
    CursosService,
    HorariosService,
    SeccionesService,
    AsignacionesService,
    MensajesService,
    ComentariosService,
    AsistenciasService,
    TicketsService,
    ActividadesService,
    ActividadesAsignadasService,
    RespuestasService,
    EvaluacionesService,
    PreguntasService,
    EvaluacionesAlumnoService,
    RespuestaPreguntaService,
    RespuestasEvaluacionService,
    LoginService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
