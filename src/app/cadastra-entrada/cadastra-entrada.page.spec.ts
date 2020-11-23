import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastraEntradaPage } from './cadastra-entrada.page';

describe('CadastraEntradaPage', () => {
  let component: CadastraEntradaPage;
  let fixture: ComponentFixture<CadastraEntradaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraEntradaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastraEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
