import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MonPremierComponent } from "./mon-premier/mon-premier.component";
import { AppareilComponent } from "./appareil/appareil.component";
import { AppareilService } from "./services/appareil.service";
import { AuthComponent } from "./auth/auth.component";
import { AppareilViewComponent } from "./appareil-view/appareil-view.component";

const appRoutes: Routes = [
  { path: "appareils", component: AppareilViewComponent },
  { path: "auth", component: AuthComponent },
  { path: "", component: AppareilViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
