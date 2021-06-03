import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BagChatPage } from './bag-chat.page';

describe('BagChatPage', () => {
  let component: BagChatPage;
  let fixture: ComponentFixture<BagChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BagChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
