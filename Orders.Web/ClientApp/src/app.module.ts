import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DxButtonModule } from "devextreme-angular";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule, FormsModule, DxButtonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }