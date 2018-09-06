import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewEventPage } from '../../pages/viewevent/viewevent'

@Component({
  selector: 'page-events',
  templateUrl: 'home.html'
})
export class EventsPage {

  constructor(public navCtrl: NavController) {

  }

  viewEvent(){
    this.navCtrl.push(ViewEventPage);
  }

}
