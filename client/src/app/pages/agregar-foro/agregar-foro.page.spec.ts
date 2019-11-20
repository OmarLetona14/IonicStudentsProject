import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarForoPage } from './agregar-foro.page';

describe('AgregarForoPage', () => {
  let component: AgregarForoPage;
  let fixture: ComponentFixture<AgregarForoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarForoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarForoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
