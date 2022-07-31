import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface User{
  firstName?:String,
  lastName?:String
  email?:String
}

@Component({
  selector: 'keybased-search-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users:User={};
  userlist:any=[];
  searchText='';
  ngOnInit(): void {
    this.getDataList().subscribe((res: any) => {
      let user = res.users
      for(let i =0;i<user.length;i++){
        this.users=user[i]
        this.userlist.push(this.users)
      }
    })
  }

  getDataList() {
    return this.http.get('https://dummyjson.com/users')
  }
}
