import { CadastrosService } from './../servicos/cadastros.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-carro',
  templateUrl: './cadastro-carro.page.html',
  styleUrls: ['./cadastro-carro.page.scss'],
})
export class CadastroCarroPage implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private add : CadastrosService,public toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      _CarroCodUsuario : ['', Validators.required],
      _CarroPlaca: ['', Validators.required],
      _CarroAno: ['', Validators.required],
      _CarroChassi: ['', Validators.required],
      _CarroKm: ['', Validators.required],
      _CarroDescricao: ['', Validators.required],
     
    });

  }
  async Cadastrar(){

    const _CarroCodUsuario = this.loginForm.get('_CarroCodUsuario').value;
    const _CarroPlaca = this.loginForm.get('_CarroPlaca').value;
    const _CarroAno = this.loginForm.get('_CarroAno').value;
    const _CarroChassi = this.loginForm.get('_CarroChassi').value;
    const _CarroKm = this.loginForm.get('_CarroKm').value;
    const _CarroDescricao = this.loginForm.get('_CarroDescricao').value;
    
    (await this.add.CadastraCarros(_CarroCodUsuario,_CarroPlaca,_CarroAno,_CarroChassi,_CarroKm,_CarroDescricao)).subscribe(
      data =>{
        this.ToastSucesso()
      }, err => {
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
