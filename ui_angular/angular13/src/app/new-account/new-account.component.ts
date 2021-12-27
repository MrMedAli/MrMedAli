import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private service:SharedService) { }
  Accounte:any;
  AccountId:string='';
  BankName:string='';
  Wording:string='';
  AccounteBalance:Number=0;


  ngOnInit(): void {
 
  }
  
  addAccount(){
    var val = {AccountId:this.AccountId,
      BankName:this.BankName,
      AccounteBalance:this.AccounteBalance,
      Wording:this.Wording};
    this.service.addAccountList(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
