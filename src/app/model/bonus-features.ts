import { Attribute } from "./attribute";

export class BonusFeatures extends Attribute {
    constructor(public id: number, public name: string) {
        super(id, name);
    }
}
