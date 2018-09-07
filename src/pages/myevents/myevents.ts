import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewEventPage } from '../../pages/viewevent/viewevent'

@Component({
  selector: 'page-myevents',
  templateUrl: 'myevents.html'
})
export class MyEventsPage {
 
 constructor(public navCtrl: NavController) {

  }

  viewEvent(){
    this.navCtrl.push(ViewEventPage);
  }
}
