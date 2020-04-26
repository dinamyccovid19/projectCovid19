import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaPageComponent } from './moda-page.component';

describe('ModaPageComponent', () => {
  let component: ModaPageComponent;
  let fixture: ComponentFixture<ModaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
