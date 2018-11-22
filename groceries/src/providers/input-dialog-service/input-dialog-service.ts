
import { Injectable } from '@angular/core';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public dataService: GroceriesServiceProvider,public alertCtrl: AlertController) {
    console.log('Hello InputDialogServiceProvider Provider');
  }







  showPrompt(item?,index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item': 'Add item',
      message: item ? "Please Edit Item...": "Please enter item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item? item.name : null
        },

        {
          name: 'quantity',
          placeholder: 'Quantity',
          value:item ? item.quantity :null

        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            if (index !== undefined){
              this.dataService.editItem(item,index);
            }
            else {
              this.dataService.addItem(item);
            }

            console.log('Saved clicked',item);
            this.dataService.editItem(item,index);
          }
        }
      ]
    });
    prompt.present();

  }


}
