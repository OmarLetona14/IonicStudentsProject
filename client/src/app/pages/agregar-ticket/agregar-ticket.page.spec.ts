import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarTicketPage } from './agregar-ticket.page';

describe('AgregarTicketPage', () => {
  let component: AgregarTicketPage;
  let fixture: ComponentFixture<AgregarTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
