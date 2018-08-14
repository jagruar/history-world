import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.css"]
})
export class ResourcesComponent implements OnInit {
  hidden = true;
  player: YT.Player;
  constructor() {}

  resources = [
    {
      name: "The crusades",
      videoId: "7YK5htZJGzs",
      ratings: 30,
      fun: 4.3,
      easy: 2.1
    },
    {
      name: "Bants crusades",
      videoId: "qrBj3u5dPgM",
      ratings: 20,
      fun: 3.64,
      easy: 0.34
    },
    {
      name: "crusading geezers",
      videoId: "7YK5htZJGzs",
      ratings: 30,
      fun: 4,
      easy: 3
    },
    {
      name: "crusading geezers",
      videoId: "7YK5htZJGzs",
      ratings: 30,
      fun: 4,
      easy: 3
    }
  ];

  ngOnInit() {}

  savePlayer(player) {
    this.player = player;
    // console.log("player instance", player);
  }
  onStateChange(event) {
    // console.log("player state", event.data);
  }

  showVideo(link: string) {
    this.player.loadVideoById(link);
    this.player.stopVideo();
  }

  toggleResources() {
    // hide all content tabs
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
}
