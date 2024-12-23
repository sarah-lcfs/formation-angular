import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap("Archibald", "ma description",  "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", new Date(), 5 );
  }
}
