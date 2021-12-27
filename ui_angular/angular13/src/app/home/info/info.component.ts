import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

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
