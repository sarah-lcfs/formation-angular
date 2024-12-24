import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap("First", "ma description",  "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", new Date(), 5 ),
        new FaceSnap("Other", "ma description",  "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", new Date(), 5 ),
        new FaceSnap("Last", "ma description",  "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", new Date(), 5 )
    ]

    getFaceSnaps(): FaceSnap[]{
        return [...this.faceSnaps];
    }
}