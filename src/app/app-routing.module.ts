import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Core/shared/home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { FooterComponent } from './Core/shared/footer/footer.component';
import { HeaderComponent } from './Core/shared/header/header.component';
import { NotfoundComponent } from './Core/shared/notfound/notfound.component';

const routes: Routes = [
 {path:"home",component:HomeComponent},
 {path:"residences",component:ResidencesComponent},
 {path:"footer",component:FooterComponent},
 {path:"header",component:HeaderComponent},
 {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
