import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursosAsignadosPage } from './cursos-asignados.page';

describe('CursosAsignadosPage', () => {
  let component: CursosAsignadosPage;
  let fixture: ComponentFixture<CursosAsignadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosAsignadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursosAsignadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
