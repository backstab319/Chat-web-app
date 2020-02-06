import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatWebAppPage } from './chat-web-app.page';

describe('ChatWebAppPage', () => {
  let component: ChatWebAppPage;
  let fixture: ComponentFixture<ChatWebAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWebAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatWebAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
