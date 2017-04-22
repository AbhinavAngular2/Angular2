import { Component } from '@angular/core';

@Component({
    selector: 'app-server', // use as elememt
    //selector: '[app-server]', // use as attribute
    //selector: '.app-server', // use as class
  templateUrl: `./server.component.html`,
  styleUrls: ['./server.component.css'],
})
export class ServerComponent{
namec = 'Abhinav';
serverId: number =10;
serverStatus: string='offline';
allowNewServer=false;
    items: any[];
    selected:string;
    constructor() { // whatever we assign inside this function will be execute at run time
       this.serverStatus=Math.random()>0.5 :'online' : 'offline';

	   this.items = [{
            name:'Prashobh',
            exp:'9',
        },
        {
            name:'Abraham',
            exp:'15',
        },
        {
            name:'George',
            exp:'2',
        },
        {
            name:'John',
            exp:'20',
        }
        ];
		setTimeout(()=>{
		  this.allowNewServer=true;
		},2000);
    }
    showSelected(item){
       this.selected = item.name;
    }
	disableBtn(){
	setTimeout(()=>{
	  this.allowNewServer=false;
	},2000);
	}
	getStatus(){
	return this.serverStatus;
	}
	getColour(){
	return this.serverStatus=='online'?'green':'red';
	}
	OnCreateServer(){
	this.serverCreationStatus='Server was created';
	}
 }
