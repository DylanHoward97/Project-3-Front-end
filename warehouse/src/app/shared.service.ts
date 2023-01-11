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


  getItems(): Observable<toyotaModel[]>{
    return this.http.get<toyotaModel[]>(`${this.apiServerUrl}/TOYOTA`)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  createItem(toyota:toyotaModel):Observable<toyotaModel>{
    return this.http.post<toyotaModel>(`${this.apiServerUrl}/TOYOTA`, toyota)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateItem(toyota:toyotaModel, id: number):Observable<toyotaModel>{
    return this.http.put<toyotaModel>(`${this.apiServerUrl}/TOYOTA/`+id, toyota)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  deleteItem(toyotaId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/TOYOTA/`+toyotaId)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  //Porsche Functions
  getPorsche():Observable<Porsche[]>{
     return this.http.get<Porsche[]>(`${this.apiServerUrl}/Porsche`) ///porsche/all`);
     .pipe(map((res:any) => {
      return res;
    }))
  }

  createPorsche(porsche:Porsche):Observable<Porsche>{
    return this.http.post<Porsche>(`${this.apiServerUrl}/Porsche/`, porsche) ///porsche/add`, porsche);
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updatePorsche(porsche:Porsche, id:number):Observable<Porsche>{
    return this.http.put<Porsche>(`${this.apiServerUrl}/porsche/` +id, porsche) //update`, porsche);
    .pipe(map((res:any) => {
      return res;
    }))
  }

  deletePorsche(porscheId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/porsche/`+porscheId ) //delete/${porscheId}`);
    .pipe(map((res:any) => {
      return res;
    }))
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
 return this.http.post<Ferrari>(`${this.apiServerUrl}/Ferrari`, ferrari) ///add`, ferrari);
 .pipe(map((res:any) => {
  return res;
}))
}

updateFerrari(ferrari:Ferrari, id: number):Observable<Ferrari>{
 return this.http.put<Ferrari>(`${this.apiServerUrl}/Ferrari/`+id, ferrari) ///update`, ferrari);
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
 return this.http.put<Dodge>(`${this.apiServerUrl}/Dodge/` +id, dodge) ///update`, dodge);
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
