import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TopicDataService } from "../services/topic-data.service";
import { marker } from "leaflet";
import { hwIcon, hwOptions } from "./map.component.helper";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  selectedTopicId: number;
  selectedCategoryId: string;
  selectedAgeId: string;
  options: {};
  markers = [];
  categories = [];
  ages = [];

  @Output() selectedEvent = new EventEmitter<string>();

  constructor(private context: TopicDataService) {}

  updateTopics() {
    if (
      this.selectedAgeId != undefined &&
      this.selectedCategoryId != undefined
    ) {
      this.markers = [];
      this.context
        .getTopics(this.selectedCategoryId, this.selectedAgeId)
        .subscribe(t => {
          var topics = t;
          topics.forEach(t => {
            this.markers.push(
              marker([t.data.lat, t.data.long], {
                icon: hwIcon,
                title: t.id
              }).on("click", $event => {
                var topicId = $event.target.options.title;
                this.selectedEvent.emit(topicId);
              })
            );
          });
        });
    }
  }

  categorySelected(id, name) {
    document.getElementById("category-label").textContent = name;
    this.selectedCategoryId = id;
    this.updateTopics();
  }

  ageSelected(id, name) {
    document.getElementById("age-label").textContent = name;
    this.selectedAgeId = id;
    this.updateTopics();
  }

  ngOnInit() {
    this.context.getCategories().subscribe(c => (this.categories = c));
    this.context.getAges().subscribe(c => (this.ages = c));
    this.options = hwOptions;
  }
}
