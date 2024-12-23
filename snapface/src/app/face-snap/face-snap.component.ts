import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass,UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle, 
    NgClass,
    UpperCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void{
    this.snapButtonText = "On snap !"
    this.userHasSnapped = false;
  }

  onSnap(): void {
    if(this.userHasSnapped){
      this.removeSnap();
    }else{
      this.addSnap();
    }
  }

  removeSnap(): void {
    this.faceSnap.removeSnap();
    this.snapButtonText = "Un Snap !"
    this.userHasSnapped = false;
  }

  addSnap(): void {
    this.faceSnap.addSnap();
    this.snapButtonText = "On Snap !"
    this.userHasSnapped = true;
  }

}
