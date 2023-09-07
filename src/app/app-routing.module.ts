import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from "./components/post-list/post-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {UserComponent} from "./components/user/user.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";

// Permet de lier les routes aux components
const routes: Routes = [
  { path: 'posts/:id', component: SinglePostComponent},
  { path: 'posts', component: PostListComponent},
  { path: 'user', component: UserComponent},
  { path: '', redirectTo: '/posts', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule(
  {
    // permet d'enregistrer les routes dans l'application
    imports: [
      // on indique que les routes de ce fichier sont à la racine de l'application
      RouterModule.forRoot(routes)
    ],
    // on export le routeur configuré
    exports:[
      RouterModule
    ]
  }
)

export class AppRoutingModule {}
