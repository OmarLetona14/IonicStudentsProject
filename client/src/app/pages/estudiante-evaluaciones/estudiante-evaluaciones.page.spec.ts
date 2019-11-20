import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstudianteEvaluacionesPage } from './estudiante-evaluaciones.page';

describe('EstudianteEvaluacionesPage', () => {
  let component: EstudianteEvaluacionesPage;
  let fixture: ComponentFixture<EstudianteEvaluacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteEvaluacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstudianteEvaluacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
