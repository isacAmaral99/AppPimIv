import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroOrdemServicoPage } from './cadastro-ordem-servico.page';

describe('CadastroOrdemServicoPage', () => {
  let component: CadastroOrdemServicoPage;
  let fixture: ComponentFixture<CadastroOrdemServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroOrdemServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroOrdemServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
