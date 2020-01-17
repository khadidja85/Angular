import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PresentationComponent} from './component/presentation/presentation.component';
import {CoreComponent} from './component/core/core.component';
import {CupidogsComponent} from './component/cupidogs/cupidogs.component';
import {ContactComponent} from './component/contact/contact.component';
import {ConnexionComponent} from './component/connexion/connexion.component';
import {InscriptionComponent} from './component/inscription/inscription.component';
import {InscriptionChienComponent} from './component/inscription-chien/inscription-chien.component';


const routes: Routes = [{path: 'presentation', component: PresentationComponent},
  {path: 'core', component: CoreComponent},
  {path: 'dogs', component: CupidogsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'inscription/chien', component: InscriptionChienComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
