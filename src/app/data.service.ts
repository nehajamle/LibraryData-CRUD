import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  ApiUrl="https://localhost:44359/api";

  constructor(private http:HttpClient) { }
  data:any[]=[];
  //GET
  getData():Observable<any[]>
  {
     return this.http.get<any>(this.ApiUrl+'/library');
  }
  //POST
  addData(val:any)
  {
     return this.http.post(this.ApiUrl+'/library', val);
  }
  //PUT
  updateData(val:any)
  {
    return this.http.put(this.ApiUrl+'/library', val);
  }
  //DELETE
  deleteData(val:any)
  {
    return this.http.delete(this.ApiUrl+'/library/'+val);
  }
  addData1(item: any) {
    this.data.push(item);
  }
  
  getData1(): any[] {
    return this.data;
  }
  
}