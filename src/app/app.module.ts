import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './Login/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
// import { NavbarModule } from './navbar/navbar.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { DemoComponent1Component } from './demo-component1/demo-component1.component';
import { DemoComponent2Component } from './demo-component2/demo-component2.component';
import { DemoPublicModifierComponent } from './demo-public-modifier/demo-public-modifier.component';
import { DemoPrivateModifierComponent } from './demo-private-modifier/demo-private-modifier.component';
import { DemoProtectedModifierComponent } from './demo-protected-modifier/demo-protected-modifier.component';
import { DemoInheritanceComponent } from './demo-inheritance/demo-inheritance.component';
import { DemoComponent3Component } from './demo-component3/demo-component3.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { NgDoCheckCycleComponent } from './ng-do-check-cycle/ng-do-check-cycle.component';
import { NgOnChangesParentComponent } from './ng-on-changes-parent/ng-on-changes-parent.component';
import { NgOnChangesChildComponent } from './ng-on-changes-child/ng-on-changes-child.component';
import { NgDoCheckCycleAComponent } from './ng-do-check-cycle-a/ng-do-check-cycle-a.component';
import { NgAfterContentInitComponent } from './ng-after-content-init/ng-after-content-init.component';
import { NgAfterContentCheckedComponent } from './ng-after-content-checked/ng-after-content-checked.component';
import { NgAfterViewInitComponent } from './ng-after-view-init/ng-after-view-init.component';
import { NgAfterViewCheckedComponent } from './ng-after-view-checked/ng-after-view-checked.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { HighlightDirective } from './highlight.directive';
import { NotDirective } from './not.directive';
import { DirectiveExamplesComponent } from './directive-examples/directive-examples.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { SqrtPipeComponent } from './sqrt-pipe/sqrt-pipe.component';
import { SearchPipeComponent } from './search-pipe/search-pipe.component';
import { PureImpurePipeExampleComponent } from './pure-impure-pipe-example/pure-impure-pipe-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Screen1Component,
    Screen2Component,
    DemoComponent1Component,
    DemoComponent2Component,
    DemoPublicModifierComponent,
    DemoPrivateModifierComponent,
    DemoProtectedModifierComponent,
    DemoInheritanceComponent,
    DemoComponent3Component,
    ParentComponentComponent,
    ChildComponentComponent,
    NgDoCheckCycleComponent,
    NgOnChangesParentComponent,
    NgOnChangesChildComponent,
    NgDoCheckCycleAComponent,
    NgAfterContentInitComponent,
    NgAfterContentCheckedComponent,
    NgAfterViewInitComponent,
    NgAfterViewCheckedComponent,
    ElementRefComponent,
    EventFilteringComponent,
    HighlightDirective,
    NotDirective,
    DirectiveExamplesComponent,
    PipeExamplesComponent,
    SqrtPipeComponent,
    SearchPipeComponent,
    PureImpurePipeExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HttpClientModule,
    DashboardModule,
    // NavbarModule
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
