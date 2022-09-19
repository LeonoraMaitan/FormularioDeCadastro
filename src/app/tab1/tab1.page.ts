import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nome = '';
  email = '';
  celular = '';
  assunto = '';
  mensagem = '';

  handlerMessage = '';
  roleMessage = '';

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirme',
      message: `<p><b>Nome: </b>${this.nome}</p>
      <p><b>E-mail: </b>${this.email}</p>
      <p><b>Celular: </b>${this.celular}</p>
      <p><b>Assunto: </b>${this.nome}</p>
      <p><b>Mensagem: </b>${this.mensagem}</p>`,

      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Cadastro Cancelado Mah oee!';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Cadastro Confirmado!';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
  //fim do formulario

  constructor(public actionSheetController: ActionSheetController,private alertController: AlertController) {}
  async mostraOpcoes() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Pizza',
        role: 'selected',
        icon: 'pizza',
        handler: () => {
        console.log('selected clicked');
        }
      }, {
        text: 'Bebida',
        icon: 'beer',
        handler: () => {
        console.log('selected clicked');}
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
         alert('Deseja cancelar');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
  

}
