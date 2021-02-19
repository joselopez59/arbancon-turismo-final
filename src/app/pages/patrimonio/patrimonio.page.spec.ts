import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatrimonioPage } from './patrimonio.page';

describe('PatrimonioPage', () => {
  let component: PatrimonioPage;
  let fixture: ComponentFixture<PatrimonioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrimonioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatrimonioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
