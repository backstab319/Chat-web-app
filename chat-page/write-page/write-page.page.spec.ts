import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WritePagePage } from './write-page.page';

describe('WritePagePage', () => {
  let component: WritePagePage;
  let fixture: ComponentFixture<WritePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WritePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
