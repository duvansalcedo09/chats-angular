import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { LoggedGuard } from "./core/guards/logged.guard";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "chat",
        pathMatch: "full",
      },
      {
        path: "chat",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./chat/chat.module").then((m) => m.ChatModule),
      },
    ],
  },
  {
    path: "authentication",
    canActivate: [LoggedGuard],
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
