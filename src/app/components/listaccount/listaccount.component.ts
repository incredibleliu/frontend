import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared-service/account.service';
import { Account } from '../../account';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaccount',
  templateUrl: './listaccount.component.html',
  styleUrls: ['./listaccount.component.css']
})
export class ListaccountComponent implements OnInit {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  newAccountNumber: string;
  accounts: Account[];

  constructor(private accountService: AccountService,
              private router: Router) { }

  statusMessage: string;

  ngOnInit() {
    // this.accountService.getAccounts().subscribe((accounts) => {
    //   console.log('222', accounts);
    //   this.accounts = accounts;
    // }, (error) => {
    //   console.log(error);
    // });
    this.reloadData();
  }

  reloadData() {
    // console.log('reloadData...');
    // this.accounts = this.accountService.getAccounts();

    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    }, (error) => {
      console.log(error);
    });
  }

  deleteAccount(id: number) {
    // this.accountService.deletAccount(account.id).subscribe((data) => {
    //   this.accounts.splice(this.accounts.indexOf(account), 1);
    // }, (error) => {
    //   console.log(error);
    //   this.statusMessage = 'Problem with the service. Please try again later';
    // });
    this.accountService.deleteAccount(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  removeAccount(account){
    const idx = this.accounts.indexOf(account);
    const length = this.accounts.length;
    const a1 = this.accounts.slice(0, idx);
    const a2 = this.accounts.slice(idx + 1, length);
    this.accounts = a1.concat(a2);
  }

  addAccount(){
    const an = this.newAccountNumber;
    console.log('an : ' + an);
    if ( an === '' || an === undefined || an === null ){
      return;
    }
    if (this.accounts.length === 0) {
      const account = new Account(an);
      this.accounts.push(account);
    } else {
      const acct = this.accounts.slice(-1).pop();
      const account = new Account(an);
      this.accounts.push(account);
    }
  }

  pendingRequests(){
    this.router.navigate(['/list-request']);
  }

  updateAccount(account) {
    this.accountService.setter(account);
    this.router.navigate(['/op']);
  }

  processForm(){
    const accounts = this.accounts;
    // add username to last item
    const username = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    const account = new Account(username);
    accounts.push(account);
    const accountsJson = JSON.stringify(accounts);
    console.log('username: ' + username);
    console.log('accountsJson: ' + accountsJson);
    console.log('processForm...');
    // if only user in array length is 1
    if (accounts.length > 1) {
      this.accountService.submitForApproval(accountsJson).subscribe((result) => {
        console.log(result);

      }, (error) => {
        console.log(error);

      });
    }

    this.accounts.pop();
  }

  // newAccount() {
  //   const account = new Account();
  //   this._accountService.setter(account);
  //   this._router.navigate(['/op']);
  // }

}
