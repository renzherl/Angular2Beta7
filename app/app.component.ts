import { Component }       from 'angular2/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent} from './dashboard.component';
import { GotchasComponent } from './gotchas.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
	<nav>
		<a [routerLink]="['Heroes']">Heroes</a>
		<a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Gotchas']">Gotchas</a>
	</nav>
    <router-outlet></router-outlet>
  `,
  styleUrls:['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})

@RouteConfig([
{
	path: '/dashboard',
	name: 'Dashboard',
	component:DashboardComponent,
	useAsDefault: true
}
,
{
	path: '/heroes',
	name: 'Heroes',
	component: HeroesComponent
}
,
{
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
}
,
{
	path: '/gotchas',
	name: 'Gotchas',
	component: GotchasComponent
}

])

export class AppComponent {
  title = 'Tour of Heroes';
}
