import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultaOrdemServicoPage } from './consulta-ordem-servico.page';

describe('ConsultaOrdemServicoPage', () => {
  let component: ConsultaOrdemServicoPage;
  let fixture: ComponentFixture<ConsultaOrdemServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaOrdemServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaOrdemServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
