import { Endereco } from './../models/Endereco';
import { CadastrosService } from './../servicos/cadastros.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../models/Clientes';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  loginForm: FormGroup;
  cliete : Cliente;
  endereco : Endereco;
  constructor(private formBuilder: FormBuilder,private add :CadastrosService,public toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      _CliNomeFantasia : ['', Validators.required],
      _CliNome: ['', Validators.required],
      _telCli: ['', Validators.required],
      _CnpjCli: ['', Validators.required],
      _CliEmail: ['', Validators.required],
      _Logradouro: ['', Validators.required],
      _Bairro: ['', Validators.required],
      _Complemento: ['', Validators.required],
      _Numero: ['', Validators.required],
      _Cidade: ['', Validators.required],
      _Estado: ['', Validators.required],
      
    });
    
  }

  async Cadastrar(){

    debugger

   //dados do endereco
    const _Logradouro = this.loginForm.get('_Logradouro').value;
    const _Bairro = this.loginForm.get('_Bairro').value;
    const _Complemento = this.loginForm.get('_Complemento').value;
    const _Numero = this.loginForm.get('_Numero').value;
    const _Cidade = this.loginForm.get('_Cidade').value;
    const _Estado = this.loginForm.get('_Estado').value;

    console.log(_Logradouro,_Bairro,_Complemento,_Numero,_Cidade,_Estado);
    (await this.add.CadastraEndereco(_Logradouro,_Bairro,_Complemento,_Numero,_Cidade,_Estado)).subscribe(
      data => {
      this.cadastraCliente(data );
      }
    )
  }
  async cadastraCliente(data){

    const __codEndereco = data.codEndereco
    const _CliNome = this.loginForm.get('_CliNome').value;
    const _CliNomeFantasia = this.loginForm.get('_CliNomeFantasia').value;
    const _telCli = this.loginForm.get('_telCli').value;
    const _CnpjCli = this.loginForm.get('_CnpjCli').value;
    const _CliEmail = this.loginForm.get('_CliEmail').value;

                                    
    (await this.add.CadastraClientes(_CliNome,_telCli,_CnpjCli,_CliNomeFantasia,_CliEmail,__codEndereco)).subscribe(
      data=>{
          this.ToastSucesso();
      },err =>{
        this.ToastErro();
      }
    )

  }
  async ToastErro() {
    const toast = await this.toastController.create({
      message: 'Alguem erro foi encontrado',
      position: 'middle',
      duration: 5000,
      color: 'warning',
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
      position: 'bottom',
      duration: 5000,
      color: 'red',
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
