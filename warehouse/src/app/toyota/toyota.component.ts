import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators }from '@angular/forms'
import { toyotaModel } from './toyota';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-toyota',
  templateUrl: './toyota.component.html',
  styleUrls: ['./toyota.component.css']
})
export class ToyotaComponent implements OnInit{
  formValue!: FormGroup;
  itemsModuleObj: toyotaModel = new toyotaModel();
  itemsData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  editItem!:toyotaModel;

  constructor(private formBuilder: FormBuilder, private api: SharedService){}
  
  ngOnInit(): void{
    this.formValue = this.formBuilder.group({
      id:[],
      image: [''],
      name: ['',Validators.required],
      model: ['', Validators.required],
      year: [ ,Validators.required],
      dateOfInventory: ['',Validators.required],
      numberOfCars: [,Validators.required],
      price: [ ,Validators.required],
      mileage: [ , Validators.required],
      status: ['', Validators.required],
      color: ['',Validators.required]
    })
      this.getAllItems();
  }

  clickAddItem(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postItem(){
    this.itemsModuleObj.id = this.formValue.value.id;
    this.itemsModuleObj.image = this.formValue.value.image;
    this.itemsModuleObj.name = this.formValue.value.name;
    this.itemsModuleObj.model = this.formValue.value.model;
    this.itemsModuleObj.year = this.formValue.value.year;
    this.itemsModuleObj.dateOfInventory = this.formValue.value.dateOfInventory;
    this.itemsModuleObj.numberOfCars = this.formValue.value.numberOfCars;
    this.itemsModuleObj.price = this.formValue.value.price;
    this.itemsModuleObj.mileage = this.formValue.value.mileage;
    this.itemsModuleObj.status = this.formValue.value.status;
    this.itemsModuleObj.color = this.formValue.value.color;

    this.api.createItem(this.itemsModuleObj).subscribe(res => {
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
    this.api.getItems().subscribe(res =>{
    this.itemsData= res;
    })
  }

  deleteItemById(item:any){
    this.api.deleteItem(item.id).subscribe(res =>{
      alert('Item deleted')
      this.getAllItems()
    })
  }

  editItemById(item:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.itemsModuleObj.id = item.id;
    this.formValue.controls['image'].setValue(item.image);
    this.formValue.controls['name'].setValue(item.name);
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
    this.itemsModuleObj.name = this.formValue.value.name;
    this.itemsModuleObj.model = this.formValue.value.model;
    this.itemsModuleObj.year = this.formValue.value.year;
    this.itemsModuleObj.dateOfInventory = this.formValue.value.dateOfInventory;
    this.itemsModuleObj.numberOfCars = this.formValue.value.numberOfCars;
    this.itemsModuleObj.price = this.formValue.value.price;
    this.itemsModuleObj.mileage = this.formValue.value.mileage;
    this.itemsModuleObj.status = this.formValue.value.status;
    this.itemsModuleObj.color = this.formValue.value.color;

    this.api.updateItem(this.itemsModuleObj,this.itemsModuleObj.id)
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
}
