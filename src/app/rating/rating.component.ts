import { Component, OnInit, Input } from "@angular/core";
import { TopicDataService } from "../services/topic-data.service";
import { Observable } from "rxjs";
import { Rating } from "../models/rating";
import { AuthService, User} from "../services/auth.service";
import {  } from "module";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {
  giggle: Rating;
  wow: Rating;
  hmm: Rating;
  user: User;

  @Input() videoId: string;

  constructor(
    private context: TopicDataService,
    public auth: AuthService ) {}

  ngOnInit() {
    this.auth.user.subscribe(u => {
      this.user = u;
      this.updateRatings(u.uid);
    });
  }

  updateClasses() {
    var giggles = document.getElementById("giggles").classList;
    var wows = document.getElementById("wows").classList;
    var hmms = document.getElementById("hmms").classList;
    this.giggle == undefined ? giggles.remove("active") : giggles.add("active");
    this.wow == undefined ? wows.remove("active") : wows.add("active");
    this.hmm == undefined ? hmms.remove("active") : hmms.add("active");
  }

  updateRatings(uid: string) {
    this.giggle, this.wow, this.hmm = undefined;
    var ratings = this.context.getRatings(uid, this.videoId);  
    ratings[0].subscribe(g => this.giggle = g);
    ratings[1].subscribe(w => this.wow = w);
    ratings[2].subscribe(h => {
      this.hmm = h;
      this.updateClasses()
    });
  }

  toggleRating($event) {
    var type = $event.target.id;
    var rating = undefined;
    if (type == "giggles") {
      rating = this.giggle;
    }
    else if (type == "wows"){
      rating = this.wow;
    }
    else {
      rating = this.hmm
    }
    rating == undefined ? 
      this.addRating(type) : 
      this.removeRating(type); 
    $event.target.classList.toggle("active"); 
  }

  addRating(ratingType: string) {
    this.context.addRating(ratingType, this.user.uid, this.videoId);
    this.updateRatings(this.user.uid);
  }

  removeRating(ratingType: string) {
    this.context.removeRating(ratingType, this.user.uid, this.videoId);
    this.updateRatings(this.user.uid);
  }  
}
