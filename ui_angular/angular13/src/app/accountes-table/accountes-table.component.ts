import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-accountes-table',
  templateUrl: './accountes-table.component.html',
  styleUrls: ['./accountes-table.component.css']
})
export class AccountesTableComponent implements OnInit {
  static refreshAccountList() {
    this.refreshAccountList();
    throw new Error('Method not implemented.');
  }

 
  constructor(private service:SharedService) { }

  AccounteList:any=[];
  ngOnInit(): void {
    this.refreshAccountList();
  }
  refreshAccountList(){
    this.service.getAccountList().subscribe(data=>{
      this.AccounteList=data;
    });
  }
}
