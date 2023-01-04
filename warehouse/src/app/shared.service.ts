import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  createItem(data:any){
    return this.http.post<any>("http://localhost:3000/TOYOTA", data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getItems(){
    return this.http.get<any>("http://localhost:3000/TOYOTA")
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateItem(data:any, id: number){
    return this.http.put<any>("http://localhost:3000/TOYOTA/"+id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  deleteItem(id:any){
    return this.http.delete<any>("http://localhost:3000/TOYOTA/"+id)
    .pipe(map((res:any) => {
      return res;
    }))
  }
}
