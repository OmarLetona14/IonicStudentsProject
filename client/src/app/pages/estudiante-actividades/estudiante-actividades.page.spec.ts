import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstudianteActividadesPage } from './estudiante-actividades.page';

describe('EstudianteActividadesPage', () => {
  let component: EstudianteActividadesPage;
  let fixture: ComponentFixture<EstudianteActividadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteActividadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstudianteActividadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
