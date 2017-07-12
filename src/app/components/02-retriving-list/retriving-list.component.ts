import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-retriving-list',
  templateUrl: './retriving-list.component.html',
  styleUrls: ['./retriving-list.component.css']
})
export class RetrivingListComponent implements OnInit {
  items: FirebaseListObservable<any>;
  itemsSnapshot: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    // relative URL, uses the database url provided in bootstrap
    this.items = this.db.list('/items');

    // absolute URL
    // const absolute = this.db.list('https://<your-app>.firebaseio.com/items');

    // query
    // const queryList = this.db.list('/items', {
    //   query: {
    //     limitToLast: 10,
    //     orderByKey: true
    //   }
    // });

    this.items = this.db.list('/items', { preserveSnapshot: true });
    this.items
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.key);
          console.log(snapshot.val());
        });
      });
  }

  addItem(newName: string) {
    // Creates a new record on the list, using the Realtime Database's push-ids.
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    // This is called a destructive update,
    // because it deletes everything currently in place and saves the new value.
    // items.set('key-of-some-data', { size: newSize });

    // This is called a non-destructive update, because it only updates
    // the values specified.
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {
    // Deletes the item by key. If no parameter is provided, the entire list will be deleted.
    this.items.remove(key);
  }
  deleteEverything() {
    // Deletes the item by key. If no parameter is provided, the entire list will be deleted.
    this.items.remove();
  }

}
