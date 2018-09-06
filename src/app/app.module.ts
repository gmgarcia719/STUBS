import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { EventsPage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyEventsPage } from '../pages/myevents/myevents';
import { CreateEventPage } from '../pages/createevent/createevent'
import { ViewEventPage} from '../pages/viewevent/viewevent'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    ListPage,
    MyEventsPage,
    CreateEventPage,
    ViewEventPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    ListPage,
    MyEventsPage,
    CreateEventPage,
    ViewEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
