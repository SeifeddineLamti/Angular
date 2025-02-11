import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Core/shared/header/header.component';
import { FooterComponent } from './Core/shared/footer/footer.component';
import { HomeComponent } from './Core/shared/home/home.component';
import { NotfoundComponent } from './Core/shared/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
