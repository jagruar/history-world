import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { InfoComponent } from "./info/info.component";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { TopicDataService } from "./services/topic-data.service";
import { AuthService } from "./services/auth.service";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { YoutubePlayerModule } from "ngx-youtube-player";
import { RatingComponent } from "./rating/rating.component";
import { QuizzesComponent } from "./quizzes/quizzes.component";
import { UserComponent } from "./user/user.component";
import { VideoComponent } from './video/video.component';
import { QuizComponent } from './quiz/quiz.component';
import { VideosComponent } from './videos/videos.component';

var firebaseConfig = {
  apiKey: "AIzaSyAHWNq1jCURgA4cJt62zWyZdXARx-qSdfI",
  authDomain: "history-world.firebaseapp.com",
  databaseURL: "https://history-world.firebaseio.com",
  projectId: "history-world",
  storageBucket: "history-world.appspot.com",
  messagingSenderId: "853634216040"
};

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InfoComponent,
    RatingComponent,
    QuizzesComponent,
    UserComponent,
    VideoComponent,
    QuizComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    LeafletModule.forRoot(),
    YoutubePlayerModule,
    AngularFireAuthModule
  ],
  providers: [TopicDataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
