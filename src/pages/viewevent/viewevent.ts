import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'viewevent.html'
})
export class ViewEventPage {
 
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        
    }
    signUp(id){
      //this will sign the user up for the event and email the user with more info and a calender invite to add to his/her outlook
    }
    moreInfo(id){
      //this will send an automated email to a user with more info about the event
    }
    comment(id){
      //brings the user to a page where he can make a comment and rate the event
    }
/*   itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  } */
}