import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {
  private route = "assets/images/";
  @Input() rating: number;
  stars = [];

  constructor() {}

  ngOnInit() {
    var count = 0;
    var rating = this.rating;
    while (count < 5) {
      if (rating < 0.25) {
        this.stars.push(this.route + "empty-star.png");
      } else if (rating < 0.75) {
        this.stars.push(this.route + "half-star.png");
      } else {
        this.stars.push(this.route + "star.png");
      }
      rating -= 1;
      count += 1;
    }
  }
}
