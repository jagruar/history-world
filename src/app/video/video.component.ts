import { Component, OnInit, Input } from "@angular/core";
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
  @Input()
  id = "blankId";
  youtubeUrl: string;
  trustedUrl: SafeUrl;

  constructor(
    private context: TopicDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  ngOnChanges() {
    this.youtubeUrl = youtube + this.id + ytOptions;
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);
  }
}
