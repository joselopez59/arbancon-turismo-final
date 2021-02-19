import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastronomiaPage } from './gastronomia.page';

describe('GastronomiaPage', () => {
  let component: GastronomiaPage;
  let fixture: ComponentFixture<GastronomiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastronomiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastronomiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
