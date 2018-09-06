import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'viewevent.html'
})
export class ViewEventPage {
 
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        
    }
/*   itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  } */
}