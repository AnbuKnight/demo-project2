import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent1Component } from './demo-component1/demo-component1.component';
import { DirectiveExamplesComponent } from './directive-examples/directive-examples.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { LoginComponent } from './Login/login/login.component';
import { NgAfterContentCheckedComponent } from './ng-after-content-checked/ng-after-content-checked.component';
import { NgAfterContentInitComponent } from './ng-after-content-init/ng-after-content-init.component';
import { NgAfterViewCheckedComponent } from './ng-after-view-checked/ng-after-view-checked.component';
import { NgAfterViewInitComponent } from './ng-after-view-init/ng-after-view-init.component';
import { NgDoCheckCycleAComponent } from './ng-do-check-cycle-a/ng-do-check-cycle-a.component';
import { NgDoCheckCycleComponent } from './ng-do-check-cycle/ng-do-check-cycle.component';
import { NgOnChangesChildComponent } from './ng-on-changes-child/ng-on-changes-child.component';
import { NgOnChangesParentComponent } from './ng-on-changes-parent/ng-on-changes-parent.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { PureImpurePipeExampleComponent } from './pure-impure-pipe-example/pure-impure-pipe-example.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { AuthGuardServiceService } from './auth-guard-service.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'screen1', component: Screen1Component },
  { path: 'contact', component: Screen2Component },
  { path: 'demo1', component: DemoComponent1Component },
  // { path: 'parent/:routerParamValue', component: ParentComponentComponent },
  { path: 'parent', component: ParentComponentComponent },
  { path: 'child', component: ChildComponentComponent },
  { path: 'NgOnChangesParent', component: NgOnChangesParentComponent },
  { path: 'NgOnChangesChild', component: NgOnChangesChildComponent },
  { path: 'NgDoCheck', component: NgDoCheckCycleComponent },
  { path: 'NgDoCheckA', component: NgDoCheckCycleAComponent },
  { path: 'NgAfterContentInit', component: NgAfterContentInitComponent },
  { path: 'NgAfterContentChecked', component: NgAfterContentCheckedComponent },
  { path: 'NgAfterViewInit', component: NgAfterViewInitComponent },
  { path: 'NgAfterViewChecked', component: NgAfterViewCheckedComponent },
  { path: 'ElementRef', component: ElementRefComponent },
  {
    path: 'DirectiveExamples',
    component: DirectiveExamplesComponent,
    canActivate: [AuthGuardServiceService],
  },
  { path: 'pipeExamples', component: PipeExamplesComponent },
  { path: 'PureImpurePipe', component: PureImpurePipeExampleComponent },

  //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: DirectiveExamplesComponent },  // Wildcard route for a 404 page
  //The router selects this route if the requested URL doesn't match any of the paths earlier in the list
  //and sends the user to the respective component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
