import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractService } from '../../../services/abstract.service';
import { ListComponent } from '../list/list.component';
import { HelperFunctions } from '../../util/helper-functions';
import $ from 'jquery'
declare var $: $

@Component({
  selector: 'CRUD',
  templateUrl: './crud-interface.component.html',
  styleUrls: ['./crud-interface.component.css']
})
export class CrudInterfaceComponent implements OnInit {

  @Input() public header: string;
  @Input() public CRUD: string;
  @Input() public items: any[];
  @Input() public displayNames: string[];
  @Input() public keysToEdit: string[];

  @Output() public onCreateClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onUpdateClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onDeleteClickEvent: EventEmitter<any> = new EventEmitter<any>(); 
  
  private createdItems: any[];
  private listitems;
  private entityName;
  private typesList;
  private keyList;
  private activeOperation;
  private objectToSend = {};

  constructor() {}

  ngOnInit() {
    this.listitems = HelperFunctions.createListItems(this.items, null, ['name']);
    this.typesList = HelperFunctions.getObjectTypesList(this.items[0]);
    this.keyList = Object.keys(this.items[0]);

    for(let i = 0; i < this.keyList.length; i++) {
      if(this.keysToEdit.indexOf(this.keyList[i]) > -1) {
        this.objectToSend[this.keyList[i]] = null;
      } else {
        this.keyList.splice(i, 1);
      }
    }

    console.log(this.typesList);
    console.log(this.objectToSend);
  }

  elclick(item) {
    this.activeOperation = item['additional'];

    if(this.activeOperation == 'Update') {
      $('#exampleModal').modal('show');
    }
  }

  getListStyle() {
    return {
      "max-height" : "154px"
    };
  }

  getObjectKeyType(key: string) {
    return typeof this.items[0][key];
  }

  onOperationClick(operation) {
    this.activeOperation = operation;
  }
}
