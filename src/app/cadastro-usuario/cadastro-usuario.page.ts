import { CadastrosService } from './../servicos/cadastros.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private add : CadastrosService,public toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      _UserCodPerfil : ['', Validators.required],
      _CodCliente: ['', Validators.required],
      _UserAtivo: ['', Validators.required],
      _UserLogin: ['', Validators.required],
      _UserSenha: ['', Validators.required],
      _UserCnh: ['', Validators.required],
      _UserRg: ['', Validators.required],
      _UserCpf: ['', Validators.required],
      
      
    });

  }

  async Cadastrar(){
    const _UserCodPerfil = this.loginForm.get('_UserCodPerfil').value;
    const _CodCliente = this.loginForm.get('_CodCliente').value;
    const _UserAtivo = this.loginForm.get('_UserAtivo').value;
    const _UserLogin = this.loginForm.get('_UserLogin').value;
    const _UserSenha = this.loginForm.get('_UserSenha').value;
    const _UserCnh = this.loginForm.get('_UserCnh').value;
    const _UserRg = this.loginForm.get('_UserRg').value;
    const _UserCpf = this.loginForm.get('_UserCpf').value;
   
                                    // _codPerfil, _codCliente, _userAtivo, _login,    _senha,      _cnh,  _rg,   _Cpf
    console.log(_UserCodPerfil,_CodCliente,_UserAtivo,_UserLogin,_UserSenha,_UserCnh,_UserRg,_UserCpf);
    (await this.add.CadastraUsuarios(_UserCodPerfil,_CodCliente,_UserAtivo,_UserLogin,_UserSenha,_UserCnh,_UserRg,_UserCpf)).subscribe(
      data =>{
          this.ToastSucesso()
      }, err =>{
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
      color: 'succes',
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
