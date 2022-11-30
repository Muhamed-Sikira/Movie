import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: "home", pathMatch: "full"},
      {path: '**', redirectTo: "home", pathMatch: "full"},
    ]),
    MovieModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
