import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// Firebase Modules and Configuration
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './common/firebase.config';

import { MaterialModule } from './common/material.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,

    // firebase initialization
    AngularFireModule.initializeApp(firebaseConfig),
    // imports firebase/database, only needed for database features
    AngularFireDatabaseModule,
    // imports firebase/auth, only needed for auth features
    AngularFireAuthModule,

    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
