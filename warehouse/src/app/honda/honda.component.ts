import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators }from '@angular/forms'
import { Honda } from './honda';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-honda',
  templateUrl: './honda.component.html',
  styleUrls: ['./honda.component.css']
})
export class HondaComponent implements OnInit{
  formValue!: FormGroup;
  itemsModuleObj: Honda = new Honda();
  itemsData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  editItem!:Honda;
  hondas!: Honda[];

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService){}
  
  ngOnInit(): void{
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
    this.itemsModuleObj.model = this.formValue.value.model;
    this.itemsModuleObj.year = this.formValue.value.year;
    this.itemsModuleObj.dateOfInventory = this.formValue.value.dateOfInventory;
    this.itemsModuleObj.numberOfCars = this.formValue.value.numberOfCars;
    this.itemsModuleObj.price = this.formValue.value.price;
    this.itemsModuleObj.mileage = this.formValue.value.mileage;
    this.itemsModuleObj.status = this.formValue.value.status;
    this.itemsModuleObj.color = this.formValue.value.color;

    this.sharedService.createHonda(this.itemsModuleObj).subscribe(res => {
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
    this.sharedService.getHonda().subscribe(res =>{
    this.itemsData= res;
    })
  }

  deleteItemById(item:any){
    this.sharedService.deleteHonda(item.id).subscribe(res =>{
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

    this.sharedService.updateHonda(this.itemsModuleObj,this.itemsModuleObj.id)
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

  searchHonda(key: string): void{
    console.log(key);
    const results: Honda[] = [];
    for(const honda of this.hondas){
      if(honda.color.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 ||
         honda.model.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 ||
         honda.status.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 ||
         honda.year.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1){
          results.push(honda);
         }
    }
    this.hondas = results;
    if(results.length === 0 || !key){
      this.getAllItems();
    }
  }

}

