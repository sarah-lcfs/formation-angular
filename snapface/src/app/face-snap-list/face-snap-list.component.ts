import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap'
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})

export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  constructor(private FaceSnapsServices: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps = this.FaceSnapsServices.getFaceSnaps();
  }
}
