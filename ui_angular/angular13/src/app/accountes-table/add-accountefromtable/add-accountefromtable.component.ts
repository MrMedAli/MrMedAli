import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-accountefromtable',
  templateUrl: './add-accountefromtable.component.html',
  styleUrls: ['./add-accountefromtable.component.css']
})
export class AddAccountefromtableComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input()acc:any;
  @Input()alert:any;

  AccountId:string='';
  BankName:string='';
  Wording:string='';
  AccounteBalance:Number=0;


  ngOnInit(): void {
    this.AccountId=this.acc.AccountId;
    this.BankName=this.acc.BankName;
    this.Wording=this.acc.Wording;
    this.AccounteBalance=this.acc.AccounteBalance
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

  updateAccount(){
    var val = {AccountId:this.AccountId,
      BankName:this.BankName,
      AccounteBalance:this.AccounteBalance,
      Wording:this.Wording
    };
    this.service.updateAccountList(this.acc.AccounteId,val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
