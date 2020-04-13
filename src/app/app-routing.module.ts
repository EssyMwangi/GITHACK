import { NotFoundComponent } from "./not-found/not-found.component";
import { GitrepositoriesComponent } from "./gitrepositories/gitrepositories.component";
import { GitusersComponent } from "./gitusers/gitusers.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "user-profile", component: GitusersComponent },
  { path: "search-repo", component: GitrepositoriesComponent },
  { path: "", redirectTo: "/user-profile", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
