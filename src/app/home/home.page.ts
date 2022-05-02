import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  id1: string;
  id2: string;
  id3: string;
  id4: string;
  id5: string;
  res: string;

  constructor() {}


  verificarChecado(valor){
    if (valor === '1'){
      this.res = ('Infantil A');
    }
    else if (valor ==='2'){
      this.res = ('Infantil B');
    }
    else if (valor ==='3'){
      this.res=('Juvenil A');
    }
    else if (valor ==='4'){
      this.res=('Juvenil B');
    }
    else if (valor ==='5'){
      this.res=('Sênior');
    }
  }
  }
