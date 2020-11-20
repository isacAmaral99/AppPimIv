import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosviagemPage } from './dadosviagem.page';

describe('DadosviagemPage', () => {
  let component: DadosviagemPage;
  let fixture: ComponentFixture<DadosviagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosviagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosviagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
