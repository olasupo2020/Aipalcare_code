export interface Card {
    index: number,
    imgUrl: string,
    content: string,
    title: string
}

export class Card {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}