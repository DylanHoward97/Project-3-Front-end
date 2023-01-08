import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Mercedes } from './mercedes';
import { SharedService } from '../shared.service';
import { FormBuilder, FormGroup, Validators }from '@angular/forms'

@Component({
  selector: 'app-mercedes',
  templateUrl: './mercedes.component.html',
  styleUrls: ['./mercedes.component.css']
})
export class MercedesComponent implements OnInit{

  formValue!: FormGroup;
  itemsModuleObj: Mercedes = new Mercedes();
  mercedesData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  editItem!:Mercedes;
  mercerdesBenze!: Mercedes[];

   constructor (private formBuilder: FormBuilder, private sharedServices: SharedService){}

   ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id:[],
      image: [''],
      model: ['', Validators.required],
      year: [ ,Validators.required],
      dateOfInventory: ['',Validators.required],
      numberOfCars: [,Validators.required],
      price: [ ,Validators.required],
      mileage: [ , Validators.required],
      status: ['', Validators.required],
      color: ['',Validators.required]
    })
    this.getAllItems()
   }

   clickAddItem(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postItem(){
    this.itemsModuleObj.id = this.formValue.value.id;
    this.itemsModuleObj.image = this.formValue.value.image;
    this.itemsModuleObj.model = this.formValue.value.model;
    this.itemsModuleObj.year = this.formValue.value.year;
    this.itemsModuleObj.dateOfInventory = this.formValue.value.dateOfInventory;
    this.itemsModuleObj.numberOfCars = this.formValue.value.numberOfCars;
    this.itemsModuleObj.price = this.formValue.value.price;
    this.itemsModuleObj.mileage = this.formValue.value.mileage;
    this.itemsModuleObj.status = this.formValue.value.status;
    this.itemsModuleObj.color = this.formValue.value.color;

    this.sharedServices.createMercedes(this.itemsModuleObj).subscribe(res => {
      console.log(res);
      alert('Item added sucessfully')
      let cle = document.getElementById('cancel')
      cle?.click();
      this.formValue.reset();
      this.getAllItems();
    }, err =>{
      alert('Unsucessful')
    });
  }

  getAllItems(){
    this.sharedServices.getMercedes().subscribe(res =>{
    this.mercedesData= res;
    })
  }

  deleteItemById(item:any){
    this.sharedServices.deleteMercedes(item.id).subscribe(res =>{
      alert('Item deleted')
      this.getAllItems()
    })
  } 

  editItemById(item:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.itemsModuleObj.id = item.id;
    this.formValue.controls['image'].setValue(item.image);
    this.formValue.controls['model'].setValue(item.model);
    this.formValue.controls['year'].setValue(item.year);
    this.formValue.controls['dateOfInventory'].setValue(item.dateOfInventory);
    this.formValue.controls['numberOfCars'].setValue(item.numberOfCars);
    this.formValue.controls['price'].setValue(item.price);
    this.formValue.controls['mileage'].setValue(item.mileage);
    this.formValue.controls['status'].setValue(item.status);
    this.formValue.controls['color'].setValue(item.color);
  }

  updateItem(){
    this.itemsModuleObj.image = this.formValue.value.image;
    this.itemsModuleObj.model = this.formValue.value.model;
    this.itemsModuleObj.year = this.formValue.value.year;
    this.itemsModuleObj.dateOfInventory = this.formValue.value.dateOfInventory;
    this.itemsModuleObj.numberOfCars = this.formValue.value.numberOfCars;
    this.itemsModuleObj.price = this.formValue.value.price;
    this.itemsModuleObj.mileage = this.formValue.value.mileage;
    this.itemsModuleObj.status = this.formValue.value.status;
    this.itemsModuleObj.color = this.formValue.value.color;

    this.sharedServices.updateMercedes(this.itemsModuleObj,this.itemsModuleObj.id)
    .subscribe(res =>{
      alert('Update sucessful');
      let cle = document.getElementById('cancel')
      cle?.click();
      this.formValue.reset();
      this.getAllItems();
      }, err =>{
      alert('Unsucessful')
    });
  }

  
  searchMercedes(key: string): void{
    console.log(key);
    const results: Mercedes[] = [];
    for(const mercedes of this.mercerdesBenze){
      if(mercedes.color.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 ||
         mercedes.model.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 ||
         mercedes.status.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 ||
         mercedes.year.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1){
          results.push(mercedes);
         }
    }
    this.mercerdesBenze = results;
    if(results.length === 0 || !key){
      this.getAllItems();
    }
  }

  //  onGetMercedes(): void{
  //    this.sharedServices.getMercedes().subscribe({
  //    next: (response: Mercedes[]) => {this.mercedes = response;},
  //    error: (error: HttpErrorResponse) => {alert(error.message)},
  //    complete: () => console.log('Get transaction completed')
  //    });
  //  }

  //  onAddMercedes(addForm:NgForm): void{
  //    document.getElementById('add-mercedes')?.click();
  //    this.sharedServices.createMercedes(addForm.value).subscribe({
  //    next: (response: Mercedes) => {console.log(response); this.onGetMercedes(); addForm.reset},
  //    error: (error: HttpErrorResponse) => {alert(error.message); addForm.reset},
  //    complete: () => console.log('Add transaction completed')
  //    });
  //   }

  //   onUpdateMercedes(mercedes:Mercedes): void{
  //     this.sharedServices.updateMercedes(mercedes,mercedes.id).subscribe({ //porch.id need to be commented out.
  //     next: (response: Mercedes) => {console.log(response); this.onGetMercedes()},
  //     error: (error: HttpErrorResponse) => {alert(error.message)},
  //     complete: () => console.log('Update transaction completed')
  //     });
  //   } 

  //   onDeleteMercedes(mercedesId:number): void{
  //     this.sharedServices.deleteMercedes(mercedesId).subscribe({
  //     next: (response: void) => {console.log(response); this.onGetMercedes()},
  //     error: (error: HttpErrorResponse) => {alert(error.message)},
  //     complete: () => console.log('Delete transaction completed')
  //     });
  //   }  

  
      

    
   
}
