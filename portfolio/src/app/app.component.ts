import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  	trigger('routerAnim', [
  		state('entering', style({
  			opacity:1
  		})),
  		state('leaving', style({
  			opacity:0.4
  		})),
  		transition('* => *', animate('500ms'))
  		])]
})
export class AppComponent {
	routeState : string;
	onLeaving() {
		this.routeState = 'leaving';
	}
	onEntering() {
		this.routeState = 'entering';
	}
}
