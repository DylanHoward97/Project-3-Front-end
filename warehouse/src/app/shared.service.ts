import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'
import { map } from 'rxjs/operators'
import { toyotaModel } from './toyota/toyota';
import { Porsche } from './porsche/porsche';
import { Mercedes } from './mercedes/mercedes';
import { Honda } from './honda/honda';
import { Ferrari } from './ferrari/ferrari';
import { Dodge } from './dodge/dodge';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiServerUrl = "http://localhost:3000";

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

  //Porsche Functions
  getPorsche():Observable<Porsche[]>{
     return this.http.get<Porsche[]>(`${this.apiServerUrl}/porsche/all`);
     
  }

  createPorsche(porsche:Porsche):Observable<Porsche>{
    return this.http.post<Porsche>(`${this.apiServerUrl}/porsche/add`, porsche);
    
  }

  updatePorsche(porsche:Porsche):Observable<Porsche>{
    return this.http.put<Porsche>(`${this.apiServerUrl}/porsche/update`, porsche);
    
  }

  deletePorsche(porscheId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/porsche/delete/${porscheId}`);
    
  }


  //Mercedes Functions
  getMercedes():Observable<Mercedes[]>{
    return this.http.get<Mercedes[]>(`${this.apiServerUrl}/Mercedes`) ///all`);
    .pipe(map((res:any) => {
      return res;
    }))
 }

 createMercedes(mercedes:Mercedes):Observable<Mercedes>{
   return this.http.post<Mercedes>(`${this.apiServerUrl}/Mercedes/`, mercedes) ///add`, mercedes);
   .pipe(map((res:any) => {
    return res;
  }))
 }

 updateMercedes(mercedes:Mercedes, id: number):Observable<Mercedes>{
   return this.http.put<Mercedes>(`${this.apiServerUrl}/Mercedes/` +id, mercedes) //update`, mercedes);
   .pipe(map((res:any) => {
    return res;
  }))
 }

 deleteMercedes(mercedesId:number):Observable<void>{
   return this.http.delete<void>(`${this.apiServerUrl}/Mercedes/`+mercedesId) //delete/${mercedesId}`);
   .pipe(map((res:any) => {
    return res;
  }))
 }


 //Honda Functions
 getHonda():Observable<Honda[]>{
  return this.http.get<Honda[]>(`${this.apiServerUrl}/Honda`) ///all`);
  .pipe(map((res:any) => {
    return res;
  }))
}

createHonda(honda:Honda):Observable<Honda>{
 return this.http.post<Honda>(`${this.apiServerUrl}/Honda`, honda) ///add`, honda);
 .pipe(map((res:any) => {
  return res;
}))
}

updateHonda(honda:Honda, id: number):Observable<Honda>{
 return this.http.put<Honda>(`${this.apiServerUrl}/Honda/` +id, honda) ///update`, honda);
 .pipe(map((res:any) => {
  return res;
}))
}

deleteHonda(hondaId:number):Observable<void>{
 return this.http.delete<void>(`${this.apiServerUrl}/Honda/` +hondaId) //delete/${hondaId}`);
 .pipe(map((res:any) => {
  return res;
}))
}


//Ferrari Functions
getFerrari():Observable<Ferrari[]>{
  return this.http.get<Ferrari[]>(`${this.apiServerUrl}/Ferrari`) ///all`);
  .pipe(map((res:any) => {
    return res;
  }))
}

createFerrari(ferrari:Ferrari):Observable<Ferrari>{
 return this.http.post<Ferrari>(`${this.apiServerUrl}/Honda`, ferrari) ///add`, ferrari);
 .pipe(map((res:any) => {
  return res;
}))
}

updateFerrari(ferrari:Ferrari, id: number):Observable<Ferrari>{
 return this.http.put<Ferrari>(`${this.apiServerUrl}/Ferrari`+id, ferrari) ///update`, ferrari);
 .pipe(map((res:any) => {
  return res;
}))
}

deleteFerrari(ferrariId:number):Observable<void>{
 return this.http.delete<void>(`${this.apiServerUrl}/Ferrari/` +ferrariId) //delete/${ferrariId}`);
 .pipe(map((res:any) => {
  return res;
}))
}


//Dodge Functions
getDodge():Observable<Dodge[]>{
  return this.http.get<Dodge[]>(`${this.apiServerUrl}/Dodge`) ///all`);
  .pipe(map((res:any) => {
    return res;
  }))
}

createDodge(dodge:Dodge):Observable<Dodge>{
 return this.http.post<Dodge>(`${this.apiServerUrl}/Dodge`, dodge) ///add`, dodge);
 .pipe(map((res:any) => {
  return res;
}))
}

updateDodge(dodge:Dodge, id: number):Observable<Dodge>{
 return this.http.put<Dodge>(`${this.apiServerUrl}/Dodge` +id, dodge) ///update`, dodge);
 .pipe(map((res:any) => {
  return res;
}))
}

deleteDodge(dodgeId:number):Observable<void>{
 return this.http.delete<void>(`${this.apiServerUrl}/Dodge/`+ dodgeId) //delete/${dodgeId}`);
 .pipe(map((res:any) => {
  return res;
}))
}
  
}
