import { Component, OnInit } from '@angular/core';
import { AccomodationCategory } from '../../model/accomodation-category';
import { AccomodationType } from '../../model/accomodation-type';
import { BonusFeatures } from '../../model/bonus-features';
import { Attribute } from '../../model/attribute';
import { AccomodationCategoryService } from '../../services/accomodation-category.service';
import { AccomodationTypeService } from '../../services/accomodation-type.service';
import { BonusFeaturesService } from '../../services/bonus-features.service';

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
}
