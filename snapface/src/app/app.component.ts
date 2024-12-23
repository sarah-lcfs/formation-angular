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
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap("First", "ma description",  "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", new Date(), 5 );
    this.myOtherSnap = new FaceSnap("Other", "ma description",  "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", new Date(), 5 );
    this.myLastSnap = new FaceSnap("Last", "ma description",  "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", new Date(), 5 );
    this.myOtherSnap.setLocation("à la montagne");
  }

}
