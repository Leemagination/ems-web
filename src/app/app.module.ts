import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';
import { DelonMockModule } from '@delon/mock';
import { delonMock } from '../../mock/mock';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ShareModule,
    CoreModule,
    environment.production ? [] : [DelonMockModule.forRoot({data: delonMock, log: true, delay: 300})]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
