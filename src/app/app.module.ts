import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Firebase Modules and Configuration
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './common/firebase.config';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // firebase initialization
    AngularFireModule.initializeApp(firebaseConfig),
    // imports firebase/database, only needed for database features
    AngularFireDatabaseModule,
    // imports firebase/auth, only needed for auth features
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
