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
import { TopicDataService } from "./services/topic-data.service";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { YoutubePlayerModule } from "ngx-youtube-player";
import { RatingComponent } from './rating/rating.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

var firebaseConfig = {
  apiKey: "AIzaSyAHWNq1jCURgA4cJt62zWyZdXARx-qSdfI",
  authDomain: "history-world.firebaseapp.com",
  databaseURL: "https://history-world.firebaseio.com",
  projectId: "history-world",
  storageBucket: "history-world.appspot.com",
  messagingSenderId: "853634216040"
};

@NgModule({
  declarations: [AppComponent, MapComponent, InfoComponent, ResourcesComponent, RatingComponent, QuizzesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    LeafletModule.forRoot(),
    YoutubePlayerModule
  ],
  providers: [TopicDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
