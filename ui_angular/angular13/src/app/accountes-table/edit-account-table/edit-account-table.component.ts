import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AccountesTableComponent } from '../accountes-table.component';

@Component({
  selector: 'app-edit-account-table',
  
  templateUrl: './edit-account-table.component.html',
  styleUrls: ['./edit-account-table.component.css']
})
export class EditAccountTableComponent implements OnInit {

  title = 'appBootstrap';
  @Input() acc:any;
  AccounteId:string="";
  BankName:string="";
  AccounteBalance:Number=0;
  Wording:string="";

  AccountList:any=[];
  AccounteList:any=[];
   
  closeResult: string = '';

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal, private service:SharedService) {console.log('acc');}
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  open(content:any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      window.location.reload();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  deleteClick(item: { AccounteId: any; }){
    if(confirm('Are you sure??')){
        const tmp=item.AccounteId;
        this.service.deleteAccountList(tmp).subscribe(data=>{
        alert(data.toString());
        window.location.reload();
      })
    }
  }
  refreshAccountList(){
    this.service.getAccountList().subscribe(data=>{
      this.AccounteList=data;
    });
  }
  ngOnInit(): void {
    this.AccounteId=this.acc.AccounteId;
    this.BankName=this.acc.BankName;
    this.AccounteBalance=this.acc.AccounteBalance;
    this.Wording=this.acc.Wording;
 
  }
 

}
