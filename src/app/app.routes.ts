import { Routes } from '@angular/router';
import { IndexComponent } from '../Components/index/index.component';
import { ViewComponent } from '../Components/view/view.component';
import { EditComponent } from '../Components/edit/edit.component';
import { CreateComponent } from '../Components/create/create.component';
import { NotfoundComponent } from '../Components/notfound/notfound.component';

export const routes: Routes = [
    {path:'',redirectTo:'post/index',pathMatch:"full",title:"Home"},
    {path:'post',redirectTo:'post/index',pathMatch:"full",title:"Home"},
    {path:'post/index',component:IndexComponent,title:"Home"},
    {path:'post/:postid/view',component:ViewComponent,title:"View"},
    {path:'post/:postid/edit',component:EditComponent,title:"Edit"},
    {path:'post/create',component:CreateComponent,title:"Create"},
    {path:'**',component:NotfoundComponent,title:"Not Found"}
];
