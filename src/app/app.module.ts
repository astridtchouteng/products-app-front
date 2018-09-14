import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyJwtInterceptor } from './interceptors/my-jwt-interceptor';
import { ProductAddGuard } from './guards/product-add.guard';
import { LogoutService } from './reservers/logout.service';
import { CartComponent } from './cart/cart.component';


const routes: Route[] = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'add', component: ProductAddComponent, canActivate: [ProductAddGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: WelcomeComponent, resolve: [LogoutService]},
  {path: 'cart' , component: CartComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    LoginComponent,
    ProductAddComponent,
    ProductDetailsComponent,
    ProductListComponent,
    NotFoundComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyJwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
