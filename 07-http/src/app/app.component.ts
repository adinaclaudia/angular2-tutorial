import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';

import {HttpService} from "./http.service";

@Component({
  selector: 'my-http-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  items: any[]=[];
  asyncString = this.httpService.getData();
  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getData().subscribe(
      (data: string)  => console.log(data)
    );
  }

  onSubmit(username: string, email: string){
     this.httpService.sendData({username: username, email:email}).subscribe(
       (data: string) => console.log(data),
       (error: string) => console.log(error)
     )
  }

  onGetData(){
     this.httpService.getOwnData().subscribe(
       data => {
         const myArray = [];
         for(let key in data){
           myArray.push(data[key]);
         }
         this.items=myArray;
       }
     )
  }
}
