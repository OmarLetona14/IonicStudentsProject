import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComentariosForoPage } from './comentarios-foro.page';

describe('ComentariosForoPage', () => {
  let component: ComentariosForoPage;
  let fixture: ComponentFixture<ComentariosForoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosForoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentariosForoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
