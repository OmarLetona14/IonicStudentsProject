import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioAdministradorPage } from './inicio-administrador.page';

describe('InicioAdministradorPage', () => {
  let component: InicioAdministradorPage;
  let fixture: ComponentFixture<InicioAdministradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioAdministradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioAdministradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
