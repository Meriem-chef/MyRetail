import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RetailComponent } from './retail/retail.component';
import { HeaderComponent } from './header/header.component';
import { EditPriceComponent } from './edit-price/edit-price.component';
import { HttpClientModule} from "@angular/common/http";
import { MatInputModule, MatCardModule,
  MatFormFieldModule,
MatButtonModule,
MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RetailComponent,
    HeaderComponent,
    EditPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
