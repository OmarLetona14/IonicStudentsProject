import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarMensajePage } from './agregar-mensaje.page';

describe('AgregarMensajePage', () => {
  let component: AgregarMensajePage;
  let fixture: ComponentFixture<AgregarMensajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMensajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarMensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
