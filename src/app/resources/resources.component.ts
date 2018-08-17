import { Component, OnInit, Input } from "@angular/core";
import { TopicDataService } from "../services/topic-data.service";
import { Resource } from "../models/resource";
import { Observable } from "rxjs";
import { noTopicId } from "../models/holistory.constansts";
import { AuthService } from "../services/auth.service";
import { Rating } from "../models/rating";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.css"]
})
export class ResourcesComponent implements OnInit {
  selectedId: string;
  resources: Resource[];

  @Input()
  topicId: string;
  constructor(public auth: AuthService, private context: TopicDataService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.context
      .getResources(this.topicId)
      .subscribe(r => (this.resources = r));
  }

  showVideo(videoId: string) {
    this.selectedId = videoId;
  }

  toggleResources() {
    if (this.topicId != noTopicId) {
      var content = document.getElementsByClassName("content-tab");
      [].forEach.call(content, function(c) {
        if (c.id == "resources") {
          c.classList.toggle("hidden");
        } else {
          c.classList.add("hidden");
        }
      });
      // select all buttons
      var buttons = document.getElementsByClassName("side-button");
      [].forEach.call(buttons, function(c) {
        if (c.id == "resources-button") {
          c.classList.toggle("open");
        } else {
          c.classList.remove("open");
        }
      });
    }
    // hide all content tabs
  }
}
