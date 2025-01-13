import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { authGuard } from './middleware/auth.guard';
import { OrdenanzasListComponent } from '../app/components/pages/Ordenanzas/ordenanzas-list/ordenanzas-list.component';
// import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GestionmenuComponent } from './components/pages/administrador/gestionmenu/gestionmenu.component';

export const routes: Routes = [

  { path: '', 
    component:AppLayoutComponent,
    children:[
      { path:'', component:HomeComponent },
      // { path:'administrador', component:GestionmenuComponent },
      { path: 'dataOrdenanza', component: OrdenanzasListComponent }
    ],
    // canActivate: [authGuard]
  },
  // { path:'login', component:LoginComponent }
  // { path:'home', component:HomeComponent }
];