import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '../../node_modules/@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbdCarouselBasicComponent } from './carousel/carousel-basic.component';

import { GlobalVarService } from './shared/global-var.service';
import { MatchHeightDirective } from './shared/match-height.directive';
import { ValidUvPipe } from './weather-list/valid-uv.pipe';
import { CityNamePipe } from './shared/city-name.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { ResizeIconPipe } from './weather-list/resize-icon.pipe';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    NgbdCarouselBasicComponent,
    MatchHeightDirective,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WeatherListComponent,
    VenueListComponent,
    ValidUvPipe,
    CityNamePipe,
    ResizeIconPipe,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'weather', component: WeatherListComponent},
      { path: 'venues', component: VenueListComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [
    GlobalVarService,
    ValidUvPipe,
    CityNamePipe,
    ResizeIconPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
