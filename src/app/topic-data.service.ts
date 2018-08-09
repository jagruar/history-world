import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { Topic } from "./topic";

@Injectable({
  providedIn: "root"
})
export class TopicDataService {
  topicsCollection: AngularFirestoreCollection<Topic>;
  topics: Observable<Topic[]>;

  constructor(private afs: AngularFirestore) {
    this.topicsCollection = this.afs.collection("topics");
    this.topics = this.topicsCollection.valueChanges();
  }
}
