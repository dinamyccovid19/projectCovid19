import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterUtentePage } from './register-utente.page';

describe('RegisterUtentePage', () => {
  let component: RegisterUtentePage;
  let fixture: ComponentFixture<RegisterUtentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUtentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterUtentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
