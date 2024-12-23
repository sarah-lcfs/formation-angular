export class FaceSnap {
    //title!: string;
    //description!: string;
    //createdAt!: Date;
    //snaps!: number;
    //imageUrl!: string;

    location?: string;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public snaps: number,
                ) {}

    removeSnap(): void {
        this.snaps--;
        }
    
        addSnap(): void {
        this.snaps++;
        }

    setLocation(location: string): void {
        this.location = location;
    }
}