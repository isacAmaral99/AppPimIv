import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoadingController, ToastController } from '@ionic/angular';
import { AuthUsuario } from '../models/AuthUsuario';
import { AuthService } from '../servicos/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public auth:AuthService,private router: Router,public toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [' ', Validators.required],
      password: [' ', Validators.required],
    });
  }
  async Entrar() {
    // this.router.navigate(['/home']);
    console.log('vai se autenticar');
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    console.log(userName,password);
    
    this.presentLoading();
     (await this.auth.autenticacao(userName,password)).subscribe(
      (data)=>{
        this.ConsultaSituacao(data)
      },err=>{
       
        this.ToastErro();

      }
    )
    
  
    // Aqui eu venho e pego as informaçoes do usuario para validar para qual
    // pagina ele vai
    
  }
  async ToastErro() {
    const toast = await this.toastController.create({
      message: 'login ou senha errado',
      position: 'middle',
      duration: 5000,
      color: 'danger',
      buttons: [
        {
          handler: () => {
            this.loginForm.reset();
          },
          text: 'ok',
          role: 'cancel',
          
        },
      ],
    });
    toast.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      spinner: 'bubbles',
      message: 'Aguarde...',
      duration: 60000,
    });
    await loading.present();

  }
  ConsultaSituacao(data) {
    let dataUser: AuthUsuario = data;
    debugger
    if (dataUser.codPerfil == 2) {
      // this.native.setItem('session_storange', dataUser);
      this.router.navigate(['/dash-board' ]);
    } else {
      this.router.navigate(['/dadosviagem']);
      // this.native.setItem('session_storange', dataUser);
      // this.router.navigate([
      //   '/home',
      //   dataUser.usuariosCodUsuario,
      //   dataUser.clientesCodCliente,
      // ]);
    }
  }

}
