import { Attribute } from "./attribute";

export class AccomodationType extends Attribute {
    constructor(public id: number, public name: string) {
        super(id, name);
    }
}
