import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLayoutModule } from './layout/app.layout.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import { OrdenanzasListComponent } from '../app/components/pages/Ordenanzas/ordenanzas-list/ordenanzas-list.component';
import { CommonModule } from '@angular/common';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { AuthInterceptor } from './middleware/auth.interceptor';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppLayoutModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    HttpClientModule,
    OrdenanzasListComponent,
    CommonModule
  ],
  providers: [ 
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } 
  ],
  templateUrl: './app.component.html'
})

export class AppComponent {}
