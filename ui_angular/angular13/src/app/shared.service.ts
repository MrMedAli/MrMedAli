import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000"

  constructor(private http:HttpClient) { }
  getAccountList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/accounte');
  }

  addAccountList(val:any){
    return this.http.post(this.APIUrl + '/accounte/',val);
  }

  updateAccountList(id:string,val:any){
    return this.http.put('http://127.0.0.1:8000/accounte/'+id,val);
  }

  deleteAccountList(val:any){
    return this.http.delete('http://127.0.0.1:8000/accounte/'+val);
  }

  getTransactionList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/transaction/');
  }

  addTransactionList(val:any){
    return this.http.post(this.APIUrl + '/transaction/',val);
  }

  updateTransactionList(val:any){
    return this.http.put(this.APIUrl + '/transaction/',val);
  }

  deleteTransactionList(val:any){
    return this.http.delete(this.APIUrl + '/transaction/',val);
  }
  
  
}
