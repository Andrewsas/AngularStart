import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/shareds/toolbar/toolbar.component';
import { SidebarComponent } from './components/shareds/sidebar/sidebar.component';
import { AuthLayoutComponent } from './components/layouts/auth/auth-layout.component';
import { AdminLayoutComponent } from './components/layouts/admin/admin-layout.component';

import { AuthService } from './security/auth-service/auth.service';
import { InterceptService } from './service/interceptor/intercept-serve';
import { AuthGuardService } from 'src/app/security/auth-guard/authguard.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
