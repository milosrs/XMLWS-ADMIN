import { Component, OnInit, ViewChild, QueryList } from '@angular/core';
import { AccomodationCategory } from '../../model/accomodation-category';
import { AccomodationType } from '../../model/accomodation-type';
import { BonusFeatures } from '../../model/bonus-features';
import { Attribute } from '../../model/attribute';
import { AccomodationCategoryService } from '../../services/accomodation-category.service';
import { AccomodationTypeService } from '../../services/accomodation-type.service';
import { BonusFeaturesService } from '../../services/bonus-features.service';
import { CrudInterfaceObject } from '../../shared/model/crudInterfaceObject';
import { CrudInterfaceComponent } from '../../../../public_api';

@Component({
  selector: 'app-attributepanel',
  templateUrl: './attributepanel.component.html',
  styleUrls: ['./attributepanel.component.css']
})
export class AttributepanelComponent implements OnInit {

  private attributesList: Attribute[];
  private attributeType: string;
  private shouldShowPanel: boolean;
  @ViewChild(CrudInterfaceComponent) private crudInterface: CrudInterfaceComponent;

  constructor(protected categoryService: AccomodationCategoryService,
              protected typeService: AccomodationTypeService,
              protected bonusService: BonusFeaturesService) { }

  ngOnInit() {
    console.log(this.attributeType);
  }

  select(accomodation) {
    this.attributeType = accomodation;

    if(accomodation === 'Category') {
      this.categoryService.getAll()
        .subscribe(resp => {
          this.attributesList = resp['responseBody'];
          this.shouldShowPanel = true;
        },
        err => {
          alert('Error fetching Accomodation Categories');
          this.shouldShowPanel = false;
        });
    } else if(accomodation === 'Type') {
      this.typeService.getAll()
        .subscribe(resp => {
          this.attributesList = resp['responseBody'];
          this.shouldShowPanel = true;
        },
        err => {
          alert('Error fetching Accomodation Types');
          this.shouldShowPanel = false;
        });
    } else if(accomodation === 'Bonus') {
      this.bonusService.getAll()
      .subscribe(resp => {
        this.attributesList = resp['responseBody'];
        this.shouldShowPanel = true;
      },
      err => {
        alert('Error fetching Bonus Features');
        this.shouldShowPanel = false;
      });
    }
  }

  backToSelection() {
    this.attributeType = undefined;
    this.shouldShowPanel = false;
    this.attributesList = [];
  }

  create(item: CrudInterfaceObject) {
    if(this.attributeType === 'Category') {
      const category = new AccomodationCategory(null, item.objToSend['name']);
      this.categoryService.insert(category)
      .subscribe(resp => {
        this.crudInterface.addToArray(resp['responseBody']);
      });
    } else if(this.attributeType === 'Type') {
      const type = new AccomodationType(null, item.objToSend['name']);
      this.typeService.insert(type)
      .subscribe(resp => {
        this.crudInterface.addToArray(resp['responseBody']);
      });
    } else if(this.attributeType === 'Bonus') {
      const bonus = new BonusFeatures(null, item.objToSend['name']);
      this.bonusService.insert(bonus)
      .subscribe(resp => {
        this.crudInterface.addToArray(resp['responseBody']);
      });
    }
  }

  update(item: CrudInterfaceObject) {
    if(this.attributeType === 'Category') {
      const category = new AccomodationCategory(item.realObject['id'], item.objToSend['name']);
      this.categoryService.update(category)
      .subscribe(resp => {
        this.crudInterface.updateFromArray(resp['responseBody'], 'id');
      });
    } else if(this.attributeType === 'Type') {
      const type = new AccomodationType(item.realObject['id'], item.objToSend['name']);
      this.typeService.update(type)
      .subscribe(resp => {
        this.crudInterface.updateFromArray(resp['responseBody'], 'id');
      });
    } else if(this.attributeType === 'Bonus') {
      const bonus = new BonusFeatures(item.realObject['id'], item.objToSend['name']);
      this.bonusService.update(bonus)
      .subscribe(resp => {
        this.crudInterface.updateFromArray(resp['responseBody'], 'id');
      });
    }
  }

  delete(item: CrudInterfaceObject) {
    if(this.attributeType === 'Category') {
      const category = new AccomodationCategory(item.realObject['id'], item.objToSend['name']);
      this.categoryService.delete(category.id)
      .subscribe(resp => {
        this.crudInterface.deleteFromArray('id', item.realObject['id']);
      });
    } else if(this.attributeType === 'Type') {
      const type = new AccomodationType(item.realObject['id'], item.objToSend['name']);
      this.typeService.delete(type.id)
      .subscribe(resp => {
        this.crudInterface.deleteFromArray('id', item.realObject['id']);
      });
    } else if(this.attributeType === 'Bonus') {
      const bonus = new BonusFeatures(item.realObject['id'], item.objToSend['name']);
      this.bonusService.delete(bonus.id)
        .subscribe(resp => {
          this.crudInterface.deleteFromArray('id', item.realObject['id']);
        });
    }
  }
}
