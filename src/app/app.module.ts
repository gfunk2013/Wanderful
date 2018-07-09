import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { GlobalVarService } from './shared/global-var.service';
import { MatchHeightDirective } from './shared/match-height.directive';
import { ValidUvPipe } from './weather-list/valid-uv.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { VenueListComponent } from './venue-list/venue-list.component';

@NgModule({
  declarations: [
    MatchHeightDirective,
    ValidUvPipe,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WeatherListComponent,
    VenueListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    GlobalVarService,
    ValidUvPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
