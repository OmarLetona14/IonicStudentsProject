import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursosListaPage } from './cursos-lista.page';

describe('CursosListaPage', () => {
  let component: CursosListaPage;
  let fixture: ComponentFixture<CursosListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursosListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
