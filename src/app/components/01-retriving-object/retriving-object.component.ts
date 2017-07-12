import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-retriving-object',
  templateUrl: './retriving-object.component.html',
  styleUrls: ['./retriving-object.component.css']
})
export class RetrivingObjectComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  snapshotItem: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    // relative URL, uses the database url provided in bootstrap
    this.item = this.db.object('/item');
    console.log('this.item', this.item);

    // absolute URL
    // this.item = db.object('https://<your-app>.firebaseio.com/item');

    // retriving snapshot
    this.snapshotItem = this.db.object('/item', { preserveSnapshot: true });
    this.snapshotItem.subscribe(snapshot => {
      console.log(snapshot);
      console.log(snapshot.key);
      console.log(snapshot.val());
    });
  }

  save(newName: string) {
    // Replaces the current value in the database with the new value
    // specified as the parameter.
    // This is called a destructive update, because it deletes everything
    // currently in place and saves the new value.
    // this.item.set(value: any);
    this.item.set({ name: newName });
  }

  update(newSize: string) {
    // Updates the current value with in the database with the new value
    // specified as the parameter.
    // This is called a non-destructive update, because it only updates
    // the values specified.
    // this.item.update(value: Object);
    this.item.update({ size: newSize });
  }

  delete() {
    // Deletes all data present at that location. Same as calling set(null).
    this.item.remove();
  }

}
