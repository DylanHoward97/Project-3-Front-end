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
     return this.http.get<Porsche[]>(`${this.apiServerUrl}/Porsche/all`);
  }

  createPorsche(porsche:Porsche):Observable<Porsche>{
    return this.http.post<Porsche>(`${this.apiServerUrl}/Porsche/add`, porsche);
  }

  updatePorsche(porsche:Porsche):Observable<Porsche>{
    return this.http.put<Porsche>(`${this.apiServerUrl}/Porsche/update`, porsche);
  }

  deletePorsche(porscheId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Porsche/delete/${porscheId}`);
  }


  //Mercedes Functions
  getMercedes():Observable<Mercedes[]>{
    return this.http.get<Mercedes[]>(`${this.apiServerUrl}/Mercedes/all`);
 }

 createMercedes(mercedes:Mercedes):Observable<Mercedes>{
   return this.http.post<Mercedes>(`${this.apiServerUrl}/Mercedes/add`, mercedes);
 }

 updateMercedes(mercedes:Mercedes):Observable<Mercedes>{
   return this.http.put<Mercedes>(`${this.apiServerUrl}/Mercedes/update`, mercedes);
 }

 deleteMercedes(mercedesId:number):Observable<void>{
   return this.http.delete<void>(`${this.apiServerUrl}/Mercedes/delete/${mercedesId}`);
 }


 //Honda Functions
 getHonda():Observable<Honda[]>{
  return this.http.get<Honda[]>(`${this.apiServerUrl}/Honda/all`);
}

createHonda(honda:Honda):Observable<Honda>{
 return this.http.post<Honda>(`${this.apiServerUrl}/Honda/add`, honda);
}

updateHonda(honda:Honda):Observable<Honda>{
 return this.http.put<Honda>(`${this.apiServerUrl}/Honda/update`, honda);
}

deleteHonda(hondaId:number):Observable<void>{
 return this.http.delete<void>(`${this.apiServerUrl}/Honda/delete/${hondaId}`);
}


//Ferrari Functions
getFerrari():Observable<Ferrari[]>{
  return this.http.get<Ferrari[]>(`${this.apiServerUrl}/Ferrari/all`);
}

createFerrari(ferrari:Ferrari):Observable<Ferrari>{
 return this.http.post<Ferrari>(`${this.apiServerUrl}/Honda/add`, ferrari);
}

updateFerrari(ferrari:Ferrari):Observable<Ferrari>{
 return this.http.put<Ferrari>(`${this.apiServerUrl}/Ferrari/update`, ferrari);
}

deleteFerrari(ferrariId:number):Observable<void>{
 return this.http.delete<void>(`${this.apiServerUrl}/Ferrari/delete/${ferrariId}`);
}


//Dodge Functions
getDodge():Observable<Dodge[]>{
  return this.http.get<Dodge[]>(`${this.apiServerUrl}/Dodge/all`);
}

createDodge(dodge:Dodge):Observable<Dodge>{
 return this.http.post<Dodge>(`${this.apiServerUrl}/Dodge/add`, dodge);
}

updateDodge(dodge:Dodge):Observable<Dodge>{
 return this.http.put<Dodge>(`${this.apiServerUrl}/Dodge/update`, dodge);
}

deleteDodge(dodgeId:number):Observable<void>{
 return this.http.delete<void>(`${this.apiServerUrl}/Dodge/delete/${dodgeId}`);
}
  
}
