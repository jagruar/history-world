import { Component, OnInit, Input } from "@angular/core";
import { TopicDataService } from "../services/topic-data.service";
import { Topic } from "../models/topic";
import { Observable } from "rxjs";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  @Input() topicId: string;
  topic: Observable<Topic>;  

  constructor(private context: TopicDataService) {}

  formatYear(year: number) {
    // TODO: AD - BC
    return year <= new Date().getFullYear() ? year : "present";
  }

  ngOnInit() {}

  ngOnChanges() {
    this.topic = this.context.getTopic(this.topicId);
  }
}
