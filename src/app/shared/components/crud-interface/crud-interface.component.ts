import { Component, OnInit, Input } from '@angular/core';
import { AbstractService } from '../../../services/abstract.service';
import { ListComponent } from '../list/list.component';
import { HelperFunctions } from '../../util/helper-functions';

@Component({
  selector: 'CRUD',
  templateUrl: './crud-interface.component.html',
  styleUrls: ['./crud-interface.component.css']
})
export class CrudInterfaceComponent implements OnInit {

  @Input() public header: string;
  @Input() public CRUD: string;
  private createdItems: string;
  private listitems;
  private entityName;

  constructor() { }

  ngOnInit() {
    this.listitems = HelperFunctions.createDummyTest(undefined);
  }

  elclick(item) {
    alert(item.text);
  }

  getListStyle() {
    return {
      "max-height" : "154px"
    };
  }
}
