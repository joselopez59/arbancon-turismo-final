import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlojamientosPage } from './alojamientos.page';

describe('AlojamientosPage', () => {
  let component: AlojamientosPage;
  let fixture: ComponentFixture<AlojamientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlojamientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlojamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
