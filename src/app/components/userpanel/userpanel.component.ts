import { Component, OnInit } from '@angular/core';
import { UserManipulatorService } from '../../services/user-manipulator.service';
import { User } from '../../model/user';
import { Constants } from '../../shared/constants/constants';
import { HelperFunctions } from '../../shared/util/helper-functions';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  private activeUserList: User[];
  private inactiveUserList: User[];
  private allUsersList: User[];
  private listType = Constants.ListType.COMMON;

  constructor(protected service: UserManipulatorService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(resp => {
        this.allUsersList = resp['responseBody'];
      },
      err => {
        alert('Error fetching users.');
      });

    this.service.getByActive(true)
      .subscribe(resp => {
        this.activeUserList = resp['responseBody'];
      },
      err => {
        alert('Error fetching active users.');
      });

    this.service.getByActive(false)
      .subscribe(resp => {
        this.inactiveUserList = resp['responseBody'];
      },
      err => {
        alert('Error fetching inactive users');
      });
  }

  convertToListItem(array) {
    return HelperFunctions.createListItems(array, null, ['username']);
  }

  onActiveClick(user: User) {
    this.service.block(user.id)
      .subscribe(resp => {
        if(resp['success'] === true) {
          const ind = this.activeUserList.indexOf(user);
          this.activeUserList.splice(this.activeUserList.indexOf(user), 1);
          this.inactiveUserList.push(user);
        } else {
          alert('Error blocking user');
        }
      },
      err => {
        alert('Error blocking user');
      });
  }

  onDisabledClick(user: User) {
    this.service.activate(user.id)
      .subscribe(resp => {
        if(resp['success'] === true) {
          const ind = this.inactiveUserList.indexOf(user);
          this.inactiveUserList.splice(this.inactiveUserList.indexOf(user), 1);
          this.activeUserList.push(user);
        } else {
          alert('Error activating user');
        }
      },
      err => {
        alert('Error activating user');
      });
  }

  onDeleteUserClick(user: User) {
    this.service.delete(user.id)
      .subscribe(resp => {
        if(resp['success'] === true) {
          this.deleteUserFromList(user, this.activeUserList);
          this.deleteUserFromList(user, this.inactiveUserList);
          this.allUsersList.splice(this.allUsersList.indexOf(user), 1);
        } else {
          alert('Error deleting user');
        }
      },
      err => {
        alert('Error deleting user');
      });
  }

  deleteUserFromList(user: User, list: User[]) {
    for(let i = 0; i < list.length; i++) {
      if(user.username === list[i].username && user.id === list[i].id) {
        list.splice(i, 1);
        return;
      }
    }
  } 
}
