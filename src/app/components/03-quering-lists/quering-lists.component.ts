import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-quering-lists',
  templateUrl: './quering-lists.component.html',
  styleUrls: ['./quering-lists.component.css']
})
export class QueringListsComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.sizeSubject = new Subject();
    this.items = this.db.list('/items', {
      query: {
        // Specify a child to order by.
        // Queries can only be ordered by one method.
        // This means you can only specify
        // orderByChild, orderByKey, or orderByValue.
        orderByChild: 'size',
        // Limit list to items that contain certain value.
        equalTo: this.sizeSubject

        // Boolean to order by Firebase Database keys.
        // orderByKey

        // Specify a value to order by.
        // orderByValue

        // Sets the maximum number of items to return from the beginning of the ordered list of results.
        // limitToFirst

        // Sets the maximum number of items to return from the end of the ordered list of results.
        // limitToLast

        // Return items greater than or equal to the specified key or value, depending on the order-by method chosen.
        // You can specify the key parameter using an object literal
        // that contains the value and the key.
        // For example: startAt: { value: 'some-value', key: 'some-key' }.
        // startAt

        // Return items less than or equal to the specified key or value, depending on the order-by method chosen.
        // endAt
      }
    });
  }

  filterBy(size: string) {
    this.sizeSubject.next(size);
  }

}
