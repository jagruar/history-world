import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TopicDataService } from "../services/topic-data.service";
import { Video } from "../models/video";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"]
})
export class VideosComponent implements OnInit {
  @Input() topicId: string;
  videos: Video[];
  @Output() videoSelected = new EventEmitter<string>();

  constructor(public auth: AuthService, private context: TopicDataService) {}

  ngOnInit() {
    this.videos = [];
  }

  ngOnChanges() {
    this.context
      .getVideos(this.topicId)
      .subscribe(r => (this.videos = r));
  }

  showVideo(videoId: string) {
    this.videoSelected.emit(videoId);
  }
}