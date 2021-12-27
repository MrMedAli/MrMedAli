import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private service:SharedService) { }

  acc:any;
  AccountList:any=[];
  AccounteList:any=[];
  ngOnInit(): void {
    this.refreshAccountList();
  }
  refreshAccountList(){
    this.service.getAccountList().subscribe(data=>{
      this.AccounteList=data;
    });
  }
  public getColor(balance: number): string{
    return balance > 0 ? "green" : "red";
 }
  
}
