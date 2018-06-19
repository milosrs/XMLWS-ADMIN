import { Attribute } from "./attribute";

export class AccomodationCategory extends Attribute{
    constructor(public id: number, public name: string) {
        super(id, name);
    }
}
