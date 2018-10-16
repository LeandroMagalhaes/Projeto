import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DatabaseProvider } from "../providers/database/database";

import { HomePage } from '../pages/home/home';
import { UsuarioPage } from '../pages/usuario/usuario';
import { ProdutoPage } from '../pages/produto/produto';
import { AnuncioPage } from '../pages/anuncio/anuncio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = null;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public dbProvider: DatabaseProvider) {
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
      this.statusBar.styleDefault();

      this.dbProvider.createDatabase()
        .then(() => {

          this.openHomePage(this.splashScreen);
        })
        .catch(() => {

          this.openHomePage(this.splashScreen);
        });
    });
  }

  private openHomePage(SplashScreen: SplashScreen){
    this.splashScreen.hide();
    this.rootPage = HomePage;
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
