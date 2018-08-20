import { Component, OnInit, Input } from "@angular/core";
import { noTopicId } from "../models/holistory.constansts";

@Component({
  selector: "app-quizzes",
  templateUrl: "./quizzes.component.html",
  styleUrls: ["./quizzes.component.css"]
})
export class QuizzesComponent implements OnInit {
  @Input() topicId: string;
  inQuiz: boolean = false;

  constructor() {}

  ngOnInit() {}

  startQuiz() {
    this.inQuiz = true;
  }

  toggleQuizzes() {
    // hide all content tabs
    if (this.topicId != noTopicId) {
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
}
