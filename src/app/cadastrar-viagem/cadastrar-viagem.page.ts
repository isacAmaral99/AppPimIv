import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CadastrosService } from '../servicos/cadastros.service';

@Component({
  selector: 'app-cadastrar-viagem',
  templateUrl: './cadastrar-viagem.page.html',
  styleUrls: ['./cadastrar-viagem.page.scss'],
})
export class CadastrarViagemPage implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private add : CadastrosService,public toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      _ViagemCodUsuario : ['', Validators.required],
      _CodCarro: ['', Validators.required],
      _CodEndereco: ['', Validators.required],
      _HoraSaida: ['', Validators.required],
      _HoraEntrada: ['', Validators.required],
      _Descricao: ['', Validators.required],
      _CarroKmInicial: ['', Validators.required],
      _CarroKmTotalViagem: ['', Validators.required],
      _CarroKmFinal: ['', Validators.required],
     
    });

  }
  async Cadastrar(){
    debugger
    const _ViagemCodUsuario = this.loginForm.get('_ViagemCodUsuario').value;
    const CodCarro = this.loginForm.get('_CodCarro').value;
    const _CodEndereco = this.loginForm.get('_HoraSaida').value;
    const _HoraSaida = this.loginForm.get('_HoraSaida').value;
    const _HoraEntrada = this.loginForm.get('_HoraEntrada').value;
    const _Descricao = this.loginForm.get('_Descricao').value;
    const _CarroKmInicial = this.loginForm.get('_CarroKmInicial').value;
    const _CarroKmFinal = this.loginForm.get('_CarroKmFinal').value;
    const _CarroKmTotalViagem = this.loginForm.get('_CarroKmTotalViagem').value;

                                   // { CodUsuario: , CodCarro:, CodEndereco:,HoraSaida:,HoraEntrada :,Descricao:,CarroKmInicial:,CarroKmFinal:,CarroKmTotalViagem:,observe: "response" },
    (await this.add.CadastraViagem(_ViagemCodUsuario, CodCarro, _CodEndereco, _HoraSaida, _HoraEntrada, _Descricao, _CarroKmInicial, _CarroKmFinal, _CarroKmTotalViagem)).subscribe(
      data =>{
        this.ToastSucesso()

      },err =>{
        this.ToastErro()

      }   
    )
    
    
  }
  async ToastErro() {
    const toast = await this.toastController.create({
      message: 'Alguem erro foi encontrado',
      position: 'middle',
      duration: 5000,
      color: 'danger',
      buttons: [
        {
          text: 'ok',
          role: 'cancel',
          handler: () => {
            this.loginForm.reset();
          },
        },
      ],
    });
    toast.present();
  }
  async ToastSucesso() {
    const toast = await this.toastController.create({
      cssClass: 'toastsucesso',
      message: 'Cadastro de cliente efetuado' ,
      position: 'middle',
      duration: 5000,
      color: 'danger',
      buttons: [
        {
          text: 'ok',
          role: 'cancel',
          handler: () => {
            this.loginForm.reset();
          },
        },
      ],
    });
    toast.present();
  }
}
