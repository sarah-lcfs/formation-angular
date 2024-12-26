import { Component, Input, OnInit } from '@angular/core';
import { NgStyle, NgClass,UpperCasePipe, DatePipe} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.services';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FaceSnap} from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.prepareInterface();

    this.getFaceSnap();
  }

  onSnap(): void {
    if(this.userHasSnapped){
      this.removeSnap();
    }else{
      this.addSnap();
    }
  }

  removeSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  addSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.snapButtonText = "On snap !"
    this.userHasSnapped = false;
  }

}
