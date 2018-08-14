import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Topic } from "../models/topic";
import { Category } from "../models/category";
import { Age } from "../models/age";

@Injectable({
  providedIn: "root"
})
export class TopicDataService {
  topicsCollection: AngularFirestoreCollection<Topic>;
  topics: Observable<Topic[]>;

  constructor(private database: AngularFirestore) {
    this.topicsCollection = this.database.collection("topics");
    this.topics = this.topicsCollection.valueChanges();
  }

  getTopic(id: string) {
    return this.database.doc("topics/" + id).valueChanges() as Observable<
      Topic
    >;
  }

  getTopics(categoryId: string, ageId: string) {
    return this.database
      .collection("topics", t =>
        t.where("categoryId", "==", categoryId).where("ageId", "==", ageId)
      )
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Topic;
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  getCategories() {
    return this.database
      .collection("categories")
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Category;
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  getAges() {
    return this.database
      .collection("ages")
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Age;
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }
}
