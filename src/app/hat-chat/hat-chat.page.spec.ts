import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HatChatPage } from './hat-chat.page';

describe('HatChatPage', () => {
  let component: HatChatPage;
  let fixture: ComponentFixture<HatChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HatChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
