import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { DatabaseProvider } from '../providers/database/database';

import { HomePage } from '../pages/home/home';
import { UsuarioPage } from '../pages/usuario/usuario';
import { ProdutoPage } from '../pages/produto/produto';
import { AnuncioPage } from '../pages/anuncio/anuncio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // Menu em exibição na Tela
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Usuário', component: UsuarioPage },
      { title: 'Anúncio', component: AnuncioPage },
      { title: 'Produto', component: ProdutoPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    /*  DatabaseProvider.createDB()
        .then(() => {
          this.abrirHomePage(this.splashScreen);
        })
        .catch(() => {
          this.abrirHomePage(this.splashScreen);
        })*/
    });
  }
/*
  private abrirHomePage(splashScreen: SplashScreen) {
    this.splashScreen.hide();
    this.rootPage = HomePage;
  }*/

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
