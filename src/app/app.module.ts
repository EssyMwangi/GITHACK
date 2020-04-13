import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { GitusersComponent } from "./gitusers/gitusers.component";
import { GitrepositoriesComponent } from "./gitrepositories/gitrepositories.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { DatePipePipe } from "./date-pipe.pipe";
import { FormsModule } from "@angular/forms";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HighlightDirective } from "./highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GitusersComponent,
    GitrepositoriesComponent,
    SearchFormComponent,
    DatePipePipe,
    NotFoundComponent,
    HighlightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
