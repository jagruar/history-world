import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { TopicDataService } from "../services/topic-data.service";
import { AuthService } from "../services/auth.service";

const youtube = "https://www.youtube.com/embed/";
const ytOptions = "?autoplay=0";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"]
})
export class VideoComponent implements OnInit {
  @Input() id = "blankId";
  @Output() closedEvent = new EventEmitter<boolean>();
  youtubeUrl: string;
  trustedUrl: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  getWidth() {
    return Math.round(window.innerWidth * 0.6);
  }

  getHeight() {
    return Math.round(window.innerHeight * 0.6);
  }

  close() {
    this.closedEvent.emit(true);
  }

  ngOnChanges() {
    this.youtubeUrl = youtube + this.id + ytOptions;
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);
  }
}