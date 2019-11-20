import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeticionCorreoPage } from './peticion-correo.page';

describe('PeticionCorreoPage', () => {
  let component: PeticionCorreoPage;
  let fixture: ComponentFixture<PeticionCorreoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionCorreoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeticionCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
