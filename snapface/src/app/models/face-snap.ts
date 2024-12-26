import { SnapType } from '../models/snap-type.type';
export class FaceSnap {
    //title!: string;
    //description!: string;
    //createdAt!: Date;
    //snaps!: number;
    //imageUrl!: string;

    location?: string;

    id: string;

    constructor(public title: string,
        public description: string,
        public imageUrl: string,
        public createdAt: Date,
        public snaps: number,
    ) { 
        this.id= crypto.randomUUID().substring(0, 8);
    }

    removeSnap(): void {
        this.snaps--;
    }

    addSnap(): void {
        this.snaps++;
    }

    snap(snapType: SnapType) {
        if (snapType === 'snap') {
          this.addSnap();
        } else if (snapType === 'unsnap') {
          this.removeSnap();
        }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
    }
}