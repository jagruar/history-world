import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TopicDataService } from "../services/topic-data.service";
import { marker } from "leaflet";
import { hwIcon, hwOptions } from "./map.component.helper";
import { Topic } from "../models/topic";
import { SelectMultipleControlValueAccessor } from "../../../node_modules/@angular/forms";

const gradient = 0.5;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  year: number;
  options: {};
  categories = [];
  topics: Topic[];
  markers = [];
  minYear = -5000;
  maxYear: number;
  orderMin = 0;
  adjusting = false;

  @Output() selectedEvent = new EventEmitter<string>();

  constructor(private context: TopicDataService) {}
  
  ngOnInit() {
    this.context.getCategories().subscribe(c => (this.categories = c));
    this.options = hwOptions;
    this.maxYear = new Date().getFullYear();
    this.topics = [];
    this.year = 200;
  }
  
  categorySelected(id) {
    this.context.getTopics(id).subscribe(t => this.topics = t);
    this.setMarkers();    
    this.orderMin -= 1;
    document.getElementById(id).style.order = this.orderMin.toString();
    document.getElementById("none").style.display = "none";
    this.hideCategories();
  }

  showCategories() {
    document.getElementById("categories").classList.remove("hidden");
  }

  hideCategories() {
    document.getElementById("categories").classList.add("hidden");
  }

  showYear() {
    document.getElementById("year").classList.remove("hidden");
  }

  hideYear() {
    document.getElementById("year").classList.add("hidden");
  }

  yearSet(value) {
    this.year = parseInt(value);
    this.setMarkers();
  }

  formatYear(year: number) {
    if (year < 0) {
      return " BC";
    }
    else {
      return "AD";
    }
  }

  setMarkers() {
    this.markers.pop();
    for (let topic of this.topics) {
      if (topic.start < this.year && topic.end > this.year) {
        this.addMarker(topic);
      }
    }
  }

  addMarker(topic: Topic) {
    this.markers.push(
      marker(
        [topic.lat, topic.long], 
        {icon: hwIcon, title: topic.topicId})
      .on("click", $event => {
        var topicId = $event.target.options.title;
        this.selectedEvent.emit(topicId);
      })
    )
  }
  
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async adjustYear(step, wait) {
    this.adjusting = true;
    while(this.adjusting) {
      if (this.year < -5000) {
        break;
      }
      this.year += step;
      this.setMarkers();
      await this.sleep(wait);
    }    
  }

  stopAdjusting() {
    this.adjusting = false;
  }
}
