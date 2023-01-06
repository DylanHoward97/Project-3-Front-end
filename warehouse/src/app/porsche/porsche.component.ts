import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http'
import { NgForm } from '@angular/forms'
import { Porsche } from './porsche';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-porsche',
  templateUrl: './porsche.component.html',
  styleUrls: ['./porsche.component.css']
})
export class PorscheComponent implements OnInit {

   porsche!:Porsche[];
   editPorsche!:Porsche;
   deletePorsche!:Porsche;

   constructor (private sharedServices: SharedService){}

   ngOnInit(): void {
       
   }

   onGetPorsche(): void{
     this.sharedServices.getPorsche().subscribe({
     next: (response: Porsche[]) => {this.porsche = response;},
     error: (error: HttpErrorResponse) => {alert(error.message)},
     complete: () => console.log('Get transaction completed')
     });
   }

   onAddPorsche(addForm:NgForm): void{
     document.getElementById('add-porsche')?.click();
     this.sharedServices.createPorsche(addForm.value).subscribe({
     next: (response: Porsche) => {console.log(response), this.onGetPorsche(),addForm.reset},
     error: (error: HttpErrorResponse) => {alert(error.message), addForm.reset},
     complete: () => console.log('Add transaction completed')
     });
    }

    onUpdatePorsche(porsche:Porsche): void{
      this.sharedServices.updatePorsche(porsche).subscribe({
      next: (response: Porsche) => {console.log(response),this.onGetPorsche()},
      error: (error: HttpErrorResponse) => {alert(error.message)},
      complete: () => console.log('Update transaction completed')
      });
    } 

    onDeletePorsche(porscheId:number): void{
      this.sharedServices.deletePorsche(porscheId).subscribe({
      next: (response: void) => {console.log(response),this.onGetPorsche()},
      error: (error: HttpErrorResponse) => {alert(error.message)},
      complete: () => console.log('Delete transaction completed')
      });
    }  

    searchPorsche(key: string): void{
      console.log(key);
      const results: Porsche[] = [];
      for(const porsche of this.porsche){
        //if(porsche.color.toLocaleLowerCase.indexOf(key) !== -1)
      }
    }

}
