import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  @Input() topic: string;
  description =
    "The romans were beasts, they had sex with kids though. Naughty naughty";

  constructor() {}

  ngOnInit() {}
}
