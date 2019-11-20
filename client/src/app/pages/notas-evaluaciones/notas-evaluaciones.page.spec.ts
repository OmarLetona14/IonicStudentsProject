import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotasEvaluacionesPage } from './notas-evaluaciones.page';

describe('NotasEvaluacionesPage', () => {
  let component: NotasEvaluacionesPage;
  let fixture: ComponentFixture<NotasEvaluacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasEvaluacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotasEvaluacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
