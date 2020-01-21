import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatGridListModule,
  MatInputModule,
  MatLineModule, MatMenuModule,
  MatOptionModule, MatRadioModule,
  MatSelectModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { PresentationComponent } from './component/presentation/presentation.component';
import { CoreComponent } from './component/core/core.component';
import { MenuComponent } from './component/menu/menu.component';

/**les formulaires contact*/
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CupidogsComponent } from './component/cupidogs/cupidogs.component';
import { ContactComponent } from './component/contact/contact.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { InscriptionChienComponent } from './component/inscription-chien/inscription-chien.component';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFileUploadModule} from 'angular-material-fileupload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    CoreComponent,
    MenuComponent,
    CupidogsComponent,
    ContactComponent,
    ConnexionComponent,
    InscriptionComponent,
    InscriptionChienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatLineModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    FlexLayoutModule,
    MatIconModule,
    MatFileUploadModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
