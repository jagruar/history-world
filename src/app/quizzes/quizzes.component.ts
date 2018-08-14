import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quizzes",
  templateUrl: "./quizzes.component.html",
  styleUrls: ["./quizzes.component.css"]
})
export class QuizzesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleQuizzes() {
    // hide all content tabs
    var content = document.getElementsByClassName("content-tab");
    [].forEach.call(content, function(c) {
      if (c.id == "quizzes") {
        c.classList.toggle("hidden");
      } else {
        c.classList.add("hidden");
      }
    });
    // select all buttons
    var buttons = document.getElementsByClassName("side-button");
    [].forEach.call(buttons, function(c) {
      if (c.id == "quizzes-button") {
        c.classList.toggle("open");
      } else {
        c.classList.remove("open");
      }
    });
  }
}
