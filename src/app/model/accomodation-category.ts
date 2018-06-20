import { Attribute } from "./attribute";

export class AccomodationCategory extends Attribute{
    constructor(public id: number, public name: string, public strength: number) {
        super(id, name);
    }
}
