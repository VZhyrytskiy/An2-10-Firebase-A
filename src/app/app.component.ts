import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private db: AngularFireDatabase) {
    const observeble = this.db.object('/item');
    observeble
      .take(1) // take only one value and then unsubscribe of this observable
      .subscribe(
        next => console.log('next', next),
        error => console.log('error', error),
        () => console.log('completed')
      );
  }
}
