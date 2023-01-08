import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Porsche } from './porsche';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-porsche',
  templateUrl: './porsche.component.html',
  styleUrls: ['./porsche.component.css']
})
export class PorscheComponent implements OnInit {

   porsches!:Porsche[];
   editPorsche?:Porsche;
   deletePorsche!:Porsche;

   constructor (private sharedServices: SharedService){}

   ngOnInit(): void {
    this.onGetPorsche()
   }

   onGetPorsche(): void{
     this.sharedServices.getPorsche().subscribe({
     next: (response: Porsche[]) => {this.porsches = response;},
     error: (error: HttpErrorResponse) => {alert(error.message)},
     complete: () => console.log('Get transaction completed')
     });
   }

   onAddPorsche(addForm:NgForm): void{
     document.getElementById('add-porsche')?.click();
     this.sharedServices.createPorsche(addForm.value).subscribe({
     next: (response: Porsche) => {console.log(response); this.onGetPorsche(); addForm.reset},
     error: (error: HttpErrorResponse) => {alert(error.message); addForm.reset},
     complete: () => console.log('Add transaction completed')
     });
    }

    onUpdatePorsche(porsche:Porsche): void{
      this.sharedServices.updatePorsche(porsche).subscribe({ //porch.id need to be commented out.
      next: (response: Porsche) => {console.log(response); this.onGetPorsche()},
      error: (error: HttpErrorResponse) => {alert(error.message)},
      complete: () => console.log('Update transaction completed')
      });
    } 

    onDeletePorsche(porscheId:number): void{
      this.sharedServices.deletePorsche(porscheId).subscribe({
      next: (response: void) => {console.log(response); this.onGetPorsche()},
      error: (error: HttpErrorResponse) => {alert(error.message)},
      complete: () => console.log('Delete transaction completed')
      });
    }  

    searchPorsche(key: string): void{
      console.log(key);
      const results: Porsche[] = [];
      for(const porsche of this.porsches){
        if(porsche.color.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 ||
           porsche.model.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 ||
           porsche.status.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 ||
           porsche.year.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1){
            results.push(porsche);
           }
      }
      this.porsches = results;
      if(results.length === 0 || !key){
        this.onGetPorsche();
      }
    }

    onOpenModal(porsche:Porsche, mode: string){
      const container = document.getElementById('main-container');
      let button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'false';
      button.setAttribute('data-toggle', 'modal');
      
      if(mode === 'add'){
        button.setAttribute('data-target', '#addPorscheModal');
      }
      if(mode === 'edit'){
        this.editPorsche = porsche;
        button.setAttribute('data-target', '#updatePorscheModal');
      }
      if(mode === 'delete'){
        this.deletePorsche = porsche;
        button.setAttribute('data-target', '#deletePorscheModal');
      }
      container!.appendChild(button);
      
      button.click();
    }

    editItemById(){
      this.porsches=this.porsches
    }

}
