
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient,private router : Router) { }
  addData(name,email,subject,message) {
      const obj = {name,email,subject,message};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(name,email,subject,message, id) {
 
      const obj = {
          name: name,
          email:email,
          subject:subject,
          message:message
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
    signIn(email,password){
      const obj = {email, password};
      console.log(obj);
      this
        .http
        .post(`${this.url}/signin`,obj)
        .subscribe((res:any) => {
          if(res.message){
            alert(res.message);
          }
          else{

            this.router.navigateByUrl(`/adopt`);
          }
        });
    }
    getDataById(id){
      return this
        .http
        .get(`${this.url}/getbyid/${id}`);
    }
    
  register(name,email,number,password) {
    // console.log(password);
    // let length = password.lenght;
    // console.log(length);
      const obj = {name,email,number,password};
      this
          .http
          .post(`${this.url}/addRegister`, obj)
          .subscribe(res => console.log(res));
  }
}


