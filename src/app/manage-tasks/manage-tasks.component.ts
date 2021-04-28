import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.component.html',
  styleUrls: ['./manage-tasks.component.scss']
})
export class ManageTasksComponent implements OnInit {

  constructor() { }

  tasks = [
    {name: 'Walk with dog', status: 'Iniciada'},
    {name: 'Coding on PC', status: 'En Proceso'},
    {name: 'Make breakfast', status: 'Finalizada'}
  ]


  model:any = {};
  model2:any = {};
  msg:string = '';
  myValue:number = 0;
  hideEdit:boolean = true;
  
  ngOnInit(): void {
  }

  addTask():void{
    if(!this.model.name || !this.model.status){
      this.msg='Por favor increse todos los campos';
      this.model={};
    }
    else{
      this.tasks.push(this.model);
      this.model={};
    }
  


    //this.msg = 'Se agrego correctamente';

  }

  deleteTask(i:number):void{
    var answer = confirm('¿Esta seguro de borrar la tarea?');
    if(answer){
      this.tasks.splice(i, 1);
      this.msg = 'Se eliminó la tarea';
    }


  }

  editTask(i:number):void{
    if(this.tasks[i].status.match("Iniciada") === null){
      this.hideEdit = true;
      this.msg="Esta tarea no se puede editar";
           
    }
    else{
      this.hideEdit = false;
      this.model2.name = this.tasks[i].name;
      this.model2.status = this.tasks[i].status;
      console.log(this.tasks[i].status)
      this.myValue = i;
    }
    

  }

  updateTask():void{
    let i = this.myValue;
    for(let j=0; j <this.tasks.length; j++){
      if(i == j){
        this.tasks[i] = this.model2;
        this.model2 = {};
        this.msg = 'Se actualizo la informacion';
      }
    }
    this.hideEdit = true;
  }

  closeAlert(){
    this.msg='';
  }


}

