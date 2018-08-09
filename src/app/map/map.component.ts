import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TopicDataService } from "../topic-data.service";
import { marker } from "leaflet";
import { hwIcon, hwOptions } from "./map.component.helper";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  selectedTopicId: number;
  options: {};
  markers = [];

  @Output() selectedEvent = new EventEmitter<string>();

  constructor(private _data: TopicDataService) {}

  sendSelected(topic: string) {
    alert(topic);
    this.selectedEvent.emit(topic);
  }

  ngOnInit() {
    this._data.topics.subscribe(t => {
      var topics = t;
      topics.forEach(t => {
        this.markers.push(
          marker([t.lat, t.long], { icon: hwIcon, title: t.name }).on(
            "click",
            $event => {
              var topicName = $event.target.options.title;
              this.selectedEvent.emit(topicName);
            }
          )
        );
      });
    });

    this.options = hwOptions;
  }
}
