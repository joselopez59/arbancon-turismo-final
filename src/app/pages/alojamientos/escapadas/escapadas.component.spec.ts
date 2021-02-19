import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscapadasComponent } from './escapadas.component';

describe('EscapadasComponent', () => {
  let component: EscapadasComponent;
  let fixture: ComponentFixture<EscapadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapadasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscapadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
