import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeelingsComponent } from './feelings/feelings.component';
import { FeelingsListComponent } from './feelings/feelings-list/feelings-list.component';
import { FeelingDetailComponent } from './feelings/feeling-detail/feeling-detail.component';
import { FeelingItemComponent } from './feelings/feelings-list/feeling-item/feeling-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeelingsComponent,
    FeelingsListComponent,
    FeelingDetailComponent,
    FeelingItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
