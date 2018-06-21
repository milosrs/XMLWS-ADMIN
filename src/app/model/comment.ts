export class Comment {
    constructor(public username: string,
                public date: number,
                public text: string,
                public reservationId: number,
                public reservationName: string,
                public reservationDate: number) {}
}
