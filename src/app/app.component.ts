import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { DetailsPage } from '../pages/details/details';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(private alertController: AlertController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Personal Info', component: DetailsPage },
      { title: 'Dashboard', component: DashboardPage }
    ];

  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  showLogoutAlert(){
    var alert = this.alertController.create();

    alert.setTitle("Log out");
    alert.setMessage("Are you sure you want to log out?");
    alert.addButton({text: "Yes", handler: () => {
      this.nav.setRoot(LoginPage);
    }});
    alert.addButton("No");

    alert.present();
  }

  enableSwipe(){
    var page = this.nav.getActive();
    if(page != null){
      if(page.component.name == "LoginPage" || page.component.name == "RegisterPage")
        return false;
    }
    return true;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
