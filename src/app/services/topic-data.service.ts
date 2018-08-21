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
import { Video } from "../models/video";
import { Rating } from "../models/rating";

const giggles = "giggles";
const wows = "wows";
const hmms = "hmms";

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

  // getTopics(categoryId: string, ageId: string) {
  //   return this.database
  //     .collection("topics", t =>
  //       t.where("categoryId", "==", categoryId).where("ageId", "==", ageId)
  //     )
  //     .snapshotChanges()
  //     .pipe(
  //       map(actions => {
  //         return actions.map(a => {
  //           const data = a.payload.doc.data() as Topic;
  //           const id = a.payload.doc.id;
  //           return { id, data };
  //         });
  //       })
  //     );
  // }

  getTopics(categoryId: string) {
    return this.database
      .collection("topics", t => t.where("categoryId", "==", categoryId))
      .valueChanges() as Observable<Topic[]>;
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
      .collection("ages", a => a.orderBy("order"))
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

  getVideos(topicId) {
    return this.database
      .collection("resources", r => r.where("topicId", "==", topicId))
      .valueChanges() as Observable<Video[]>;
  }

  getGiggle(userId, videoId) {
    var ratingId = userId + "_" + videoId;
    return this.database
      .doc(giggles + "/" + ratingId)
      .valueChanges() as Observable<Rating>;
  }


  getRating(ratingType: string, id: string) {
    return this.database
      .doc(ratingType + "/" + id)
      .valueChanges() as Observable<Rating>;
  }

  getRatings(userId, videoId) {
    var ratingId = userId + "_" + videoId;
    var ratings: Observable<Rating>[] = [];
    ratings.push(this.getRating(giggles, ratingId));
    ratings.push(this.getRating(wows, ratingId));
    ratings.push(this.getRating(hmms, ratingId));
    return ratings;
  }

  addRating(collection: string, userId: string, videoId: string) {
    var ratingId = userId + "_" + videoId;
    this.database.collection(collection).doc(ratingId).set({
      videoId: videoId
    });
  }

  removeRating(collection: string, userId: string, videoId: string) {
    var ratingId = userId + "_" + videoId;
    this.database.collection(collection).doc(ratingId).delete();
  }
}

// userid_videoid = ratingid .....   6cqUUIZumESvhkHSIu9CucRzMSY2_X0zudTQelzI
