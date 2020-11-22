import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CadastrosService } from '../servicos/cadastros.service';

@Component({
  selector: 'app-cadastro-ordem-servico',
  templateUrl: './cadastro-ordem-servico.page.html',
  styleUrls: ['./cadastro-ordem-servico.page.scss'],
})
export class CadastroOrdemServicoPage implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private add : CadastrosService,public toastController: ToastController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      _CodCliente : ['', Validators.required],
      _CodUsuario: ['', Validators.required],
      _CodCarro: ['', Validators.required],
      _Descricao: ['', Validators.required],
    });
  }
  async Cadastrar(){
    
    const _CodCliente = this.loginForm.get('_CodCliente').value;
    const _CodUsuario = this.loginForm.get('_CodUsuario').value;
    const _CodCarro = this.loginForm.get('_CodCarro').value;
    const _Descricao = this.loginForm.get('_Descricao').value;
   
    (await this.add.CadastraOrdemServico(_CodCliente,_CodUsuario,_CodCarro,_Descricao)).subscribe(
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
      message: 'Cadastro de ordem  efetuado' ,
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
