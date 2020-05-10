import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewRoomPage } from './view-room.page';

describe('ViewRoomPage', () => {
  let component: ViewRoomPage;
  let fixture: ComponentFixture<ViewRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRoomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
