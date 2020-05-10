import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanfingPageUniversityPage } from './lanfing-page-university.page';

describe('LanfingPageUniversityPage', () => {
  let component: LanfingPageUniversityPage;
  let fixture: ComponentFixture<LanfingPageUniversityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanfingPageUniversityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanfingPageUniversityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
