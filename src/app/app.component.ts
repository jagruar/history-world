import { Component, NgZone } from "@angular/core";
import { Topic } from "./models/topic";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "history-world";
  topicId: string = "topicInfo";
  videoId: string;
  videoActive: boolean = false;
  quizActive: boolean = false;
  videoReady: boolean = false;
  quizReady: boolean = false;

  constructor(private ngZone: NgZone) {}

  receiveSelected($event) {
    this.topicId = $event;
    this.ngZone.run(() => true);
  }

  showVideo($event) {
    this.videoId = $event;
    this.videoReady = true;
  }

  closeVideo() {
    this.videoReady = false;
  }

  videoClick() {
    this.quizActive = false;
    this.videoActive = !this.videoActive;
  }

  quizClick() {
    this.videoActive = false;
    this.quizActive = !this.quizActive;
  }

  buttonDown($event) {
    $event.target.classList.add("down")
  }

  buttonUp($event) {
    $event.target.classList.remove("down")
  }
}
