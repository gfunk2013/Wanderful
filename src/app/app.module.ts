import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SimpleGlobal } from '../../node_modules/ng2-simple-global';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { MatchHeightDirective } from './shared/match-height.directive';
import { ValidUvPipe } from './weather-list/valid-uv.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WeatherListComponent,
    VenueListComponent,
    MatchHeightDirective,
    ValidUvPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    SimpleGlobal,
    ValidUvPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
