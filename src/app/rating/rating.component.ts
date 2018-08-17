import { Component, OnInit, Input } from "@angular/core";
import { TopicDataService } from "../services/topic-data.service";
import { Observable } from "rxjs";
import { Rating } from "../models/rating";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {
  giggle: Observable<Rating>;
  wow: Observable<Rating>;
  hmm: Observable<Rating>;

  @Input() userId: string;
  @Input() videoId: string;

  constructor(private context: TopicDataService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    var ratings = this.context.getRatings(this.userId, this.videoId);
    this.giggle = ratings[0];
    this.wow = ratings[1];
    this.hmm = ratings[2];
  }

  addRating(ratingType: string) {
    this.context.addRating(ratingType, this.userId, this.videoId);
  }

  removeRating(ratingType: string) {
    this.context.removeRating(ratingType, this.userId, this.videoId);
  }

  
}
