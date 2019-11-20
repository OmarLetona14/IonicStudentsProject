import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuariosListaPage } from './usuarios-lista.page';

describe('UsuariosListaPage', () => {
  let component: UsuariosListaPage;
  let fixture: ComponentFixture<UsuariosListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
