import { GituserserviceService } from "./../gituserservice.service";
import { Gitrepositories } from "./../gitrepositories";
import { Gitusers } from "./../gitusers";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gitusers",
  templateUrl: "./gitusers.component.html",
  styleUrls: ["./gitusers.component.css"],
})
export class GitusersComponent implements OnInit {
  user: Gitusers;
  repo: Gitrepositories;
  constructor(
    public myService: GituserserviceService,
    private repoService: GituserserviceService
  ) {}

  searchs(searchName) {
    this.myService.searchUSer(searchName).then(
      (success) => {
        this.user = this.myService.foundUser;
      },
      (error) => {
        console.log(error);
      }
    );
    this.repoService.getReopos(searchName).then(
      (results) => {
        this.repo = this.repoService.allRepos;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.searchs("EssyMwangi");
  }
}
