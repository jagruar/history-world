import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { InfoComponent } from "./info/info.component";
import { ResourcesComponent } from "./resources/resources.component";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { TopicDataService } from "./topic-data.service";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

var firebaseConfig = {
  apiKey: "AIzaSyAHWNq1jCURgA4cJt62zWyZdXARx-qSdfI",
  authDomain: "history-world.firebaseapp.com",
  databaseURL: "https://history-world.firebaseio.com",
  projectId: "history-world",
  storageBucket: "history-world.appspot.com",
  messagingSenderId: "853634216040"
};

@NgModule({
  declarations: [AppComponent, MapComponent, InfoComponent, ResourcesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    LeafletModule.forRoot()
  ],
  providers: [TopicDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
