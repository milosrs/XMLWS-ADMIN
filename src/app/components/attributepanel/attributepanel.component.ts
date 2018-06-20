import { Component, OnInit } from '@angular/core';
import { AccomodationCategory } from '../../model/accomodation-category';
import { AccomodationType } from '../../model/accomodation-type';
import { BonusFeatures } from '../../model/bonus-features';
import { Attribute } from '../../model/attribute';
import { AccomodationCategoryService } from '../../services/accomodation-category.service';
import { AccomodationTypeService } from '../../services/accomodation-type.service';
import { BonusFeaturesService } from '../../services/bonus-features.service';
import { CrudInterfaceObject } from '../../shared/model/crudInterfaceObject';

@Component({
  selector: 'app-attributepanel',
  templateUrl: './attributepanel.component.html',
  styleUrls: ['./attributepanel.component.css']
})
export class AttributepanelComponent implements OnInit {

  private attributesList: Attribute[];
  private attributeType: string;
  private shouldShowPanel: boolean;

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
        console.log(resp)
      });
    } else if(this.attributeType === 'Type') {
      const type = new AccomodationType(null, item.objToSend['name']);
      this.typeService.insert(type)
      .subscribe(resp => {
        console.log(resp)
      });
    } else if(this.attributeType === 'Bonus') {
      const bonus = new BonusFeatures(null, item.objToSend['name']);
      this.bonusService.insert(bonus)
      .subscribe(resp => {
        console.log(resp)
      });
    }
  }

  update(item: CrudInterfaceObject) {
    if(this.attributeType === 'Category') {
      const category = new AccomodationCategory(item.realObject['id'], item.objToSend['name']);
      this.categoryService.update(category)
      .subscribe(resp => {
        console.log(resp)
      });
    } else if(this.attributeType === 'Type') {
      const type = new AccomodationType(item.realObject['id'], item.objToSend['name']);
      this.typeService.update(type)
      .subscribe(resp => {
        console.log(resp)
      });
    } else if(this.attributeType === 'Bonus') {
      const bonus = new BonusFeatures(item.realObject['id'], item.objToSend['name']);
      this.bonusService.update(bonus)
      .subscribe(resp => {
        console.log(resp)
      });
    }
  }

  delete(item: CrudInterfaceObject) {
    if(this.attributeType === 'Category') {
      const category = new AccomodationCategory(item.realObject['id'], item.objToSend['name']);
      this.categoryService.update(category.id)
      .subscribe(resp => {
        console.log(resp)
      });
    } else if(this.attributeType === 'Type') {
      const type = new AccomodationType(item.realObject['id'], item.objToSend['name']);
      this.typeService.update(type.id)
      .subscribe(resp => {
        console.log(resp)
      });
    } else if(this.attributeType === 'Bonus') {
      const bonus = new BonusFeatures(item.realObject['id'], item.objToSend['name']);
      this.bonusService.update(bonus.id)
        .subscribe(resp => {
          console.log(resp)
        });
    }
  }
}
