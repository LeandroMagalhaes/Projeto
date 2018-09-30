import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsuarioPage } from '../pages/usuario/usuario';
import { ProdutoPage } from '../pages/produto/produto';
import { AnuncioPage } from '../pages/anuncio/anuncio';
import { CameraPage } from '../pages/camera/camera';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* Categoria de Produtos
import { EsportePage } from '../CatEsporte/esporte';
import { EletronicoPage } from '../CatEletronico/eletronico';
import { EmpregoPage } from '../CatEmprego/emprego';
import { ImovelPage } from '../CatImoveis/imovel';
import { MusicaPage } from '../CatMusica/musica';
import { AnimalPage } from '../CatAnimal/animal';
import { VeiculoPage } from '../CatVeiculo/veiculo';
*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsuarioPage,
    ProdutoPage,
    AnuncioPage,
	  CameraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsuarioPage,
    ProdutoPage,
    AnuncioPage,
	  CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
