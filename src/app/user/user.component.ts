import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  authenticated = false;

  constructor(public auth: AuthService) {}

  ngOnInit() {}

  login() {
    this.authenticated = true;
  }

  toggleUser() {
    var content = document.getElementsByClassName("content-tab");
    [].forEach.call(content, function(c) {
      if (c.id == "user") {
        c.classList.toggle("hidden");
      } else {
        c.classList.add("hidden");
      }
    });
    // select all buttons
    var buttons = document.getElementsByClassName("side-button");
    [].forEach.call(buttons, function(c) {
      if (c.id == "user-button") {
        c.classList.toggle("open");
      } else {
        c.classList.remove("open");
      }
    });
  }
}
