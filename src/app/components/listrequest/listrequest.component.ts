import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared-service/account.service';
import { UserRequestService } from '../../shared-service/user-request.service';
import { Account } from '../../account';
import { UserRequest } from '../../UserRequest';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listrequest',
  templateUrl: './listrequest.component.html',
  styleUrls: ['./listrequest.component.css']
})
export class ListrequestComponent implements OnInit {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  username: string;
  public userRequests: UserRequest[];
  showApprove = false;
  showReject = false;
  showCancel = false;


  constructor(private userRequestService: UserRequestService,
              private router: Router) { }

  statusMessage: string;

  ngOnInit() {

    console.log('ngOnInit...');
    this.username = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    const username = this.username;
    console.log('ngOnInit username: ' + username);
    if ('john' === username) {
      this.showApprove = true;
      this.showReject = true;
      this.showCancel = false;
    } else if ('tom' === username){
      this.showApprove = false;
      this.showReject = false;
      this.showCancel = true;
    }
    this.reloadData();
  }

  reloadData() {
    console.log('reloadData...');
    if ('tom' === this.username) {
      console.log('reloadData... tom...');
      this.userRequestService.getUserRequests('pending').subscribe((userRequests) => {
        this.userRequests = userRequests;
      }, (error) => {
        console.log(error);
      });
    } else if ('john' === this.username) {
      console.log('reloadData... john...');
      this.userRequestService.getUserRequests('all').subscribe((userRequests) => {
        this.userRequests = userRequests;
      }, (error) => {
        console.log(error);
      });
    }

  }

  approve(userRequest: UserRequest){

    console.log('approve...');
    const dateStr = new Date().toISOString();
    userRequest.status = 'approved';
    userRequest.approvalDate = dateStr;
    userRequest.approvedBy = this.username;

    const userRequestJson = JSON.stringify(userRequest);

    this.userRequestService.updateUserRequest(userRequestJson).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/list-request']);

    }, (error) => {
      console.log(error);

    });

  }

  reject(userRequest: UserRequest){

    console.log('reject...');
    userRequest.status = 'rejected';
    const userRequestJson = JSON.stringify(userRequest);

    this.userRequestService.updateUserRequest(userRequestJson).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/list-request']);

    }, (error) => {
      console.log(error);

    });

  }

  cancel(userRequest: UserRequest){

    console.log('cancel...');
    userRequest.status = 'cancelled';
    const userRequestJson = JSON.stringify(userRequest);

    this.userRequestService.updateUserRequest(userRequestJson).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/list-request']);

    }, (error) => {
      console.log(error);

    });

  }
}
