import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotasActividadesPage } from './notas-actividades.page';

describe('NotasActividadesPage', () => {
  let component: NotasActividadesPage;
  let fixture: ComponentFixture<NotasActividadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasActividadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotasActividadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
