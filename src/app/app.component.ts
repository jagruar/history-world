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

  constructor(private ngZone: NgZone) {}

  receiveSelected($event) {
    this.topicId = $event;
    this.ngZone.run(() => true);
  }
}
