import { Component, OnInit } from '@angular/core';
import { OrdenanzasService } from '../../../../layout/service/Ordenanzas/ordenanzas.service';
import { SharedModule } from '../../../../shared/shared.module';
import { Ordenanza } from '../../../../interface/ordenanza.interface';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-ordenanzas-list',
  standalone: true,
  imports: [
    SharedModule,InputNumberModule
  ],
  templateUrl: './ordenanzas-list.component.html',
  styleUrl: './ordenanzas-list.component.css',
  providers:[
    HttpClient,OrdenanzasService,MessageService
  ]
})
// export class OrdenanzasListComponent implements OnInit {
//   data: any[] = [];
// constructor(private apiservice: OrdenanzasService){}
//   ngOnInit(): void{
//     this.apiservice.getOrdenanzas().subscribe((response) =>{
//       this.data = response;
//       console.log(response); 
//     });
//   }
// }

export class OrdenanzasListComponent implements OnInit{
  ordenanzaDialog: boolean = false;
  deleteOrdenanzaDialog: boolean = false;
  ord:Ordenanza={};
  ordenan: Ordenanza[]=[];
  submitted: boolean = false;
  rowsPerPageOptions: number[] = [5,10,20];
  descripcion:string='';

  constructor(private ordService:OrdenanzasService, private messageService: MessageService){
    this.getOrdenanzas();
  }

  ngOnInit(): void {
    
  }
  getOrdenanzas(){
    this.ordService.getOrdenanzas().subscribe(data => {this.ordenan = data;console.log(this.ordenan)});
  }
  
  openNew(){
    this.ord = {} as Ordenanza;
    this.submitted = false;
    this.ordenanzaDialog = true;
  }

  hideDialog() {
    this.ordenanzaDialog = false;
    this.submitted = false;
  }
  saveProduct() {

    this.submitted = false;

    if(this.ord.id){
      this.ordService.updateOrdenanza(this.ord).subscribe((data)=>{
        this.ord =data;
        this.getOrdenanzas();
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Ordenanza Editada', life: 3000});
      })
    }else{
      this.ordService.addOrdenanza(this.ord).subscribe((data)=>{
        this.ord=data;
        this.getOrdenanzas();
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Ordenanza Creada', life: 3000 });
      })

    }

  }

  editProduct(){}

  deleteProduct(){}

}