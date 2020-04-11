import { GituserserviceService } from './../gituserservice.service';
import { Gitrepositories } from './../gitrepositories';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gitrepositories',
  templateUrl: './gitrepositories.component.html',
  styleUrls: ['./gitrepositories.component.css']
})
export class GitrepositoriesComponent implements OnInit {
  repo: Gitrepositories;
  constructor( public repoService: GituserserviceService ) { }

  repoSearch(searchName){
    this.repoService.getReopos(searchName).then(
      (results)=>{
        this.repo =this.repoService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('EssyMwangi');
  }

 

}
