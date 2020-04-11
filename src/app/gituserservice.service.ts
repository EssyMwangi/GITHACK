import { GitusersComponent } from './gitusers/gitusers.component';
import { GitrepositoriesComponent } from './gitrepositories/gitrepositories.component';
import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Gitrepositories } from './gitrepositories';
import { Gitusers } from './gitusers';
import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class GituserserviceService {
  foundUser: Gitusers;
  allRepos: Gitrepositories;
  

  constructor(private http: HttpClient) {
    this.foundUser = new Gitusers("","","","",0,0,0,"",new Date);
    this.allRepos = new Gitrepositories("","","",new Date,0,0,"");
  }

  searchUSer(searchName: string) {
   
    interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
        (result) => {
          this.foundUser = result;
          console.log(this.foundUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getReopos(searchName){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language_used:string;
      created_on:Date;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Gitrepositories>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
        (results) => {
          this.allRepos= results;
          console.log(this.allRepos);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }

  
}
