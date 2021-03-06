import { CadastrosService } from './../servicos/cadastros.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../servicos/auth.service';

@Component({
  selector: 'app-cadastrar-saida',
  templateUrl: './cadastrar-saida.page.html',
  styleUrls: ['./cadastrar-saida.page.scss'],
})
export class CadastrarSaidaPage implements OnInit {
  loginForm: FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public add: CadastrosService ,public toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      _CodUsuario: [' ', Validators.required],
      _CodViagem: [' ', Validators.required],
      _CodCarro: [' ', Validators.required],
      _HoraEntrada: [' ', Validators.required],
    });
  }

  async Cadastrar(){
    const _CodUsuario = this.loginForm.get('_CodUsuario').value;
    const _CodViagem = this.loginForm.get('_CodViagem').value;
    const _CodCarro = this.loginForm.get('_CodCarro').value;
    const _HoraEntrada = this.loginForm.get('_HoraEntrada').value;
    
    (await this.add.CadastraSaida(_CodUsuario,_CodViagem,_CodCarro,_HoraEntrada)).subscribe(
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
