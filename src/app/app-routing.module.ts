import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from "./components/post-list/post-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

// Permet de lier les routes aux components
const routes: Routes = [
  { path: 'posts', component: PostListComponent},
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
