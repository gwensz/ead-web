import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Skill } from '../../skill';

@Component({
  selector: 'app-blurb',
  templateUrl: './blurb.component.html',
  styleUrls: ['./blurb.component.scss'],
  animations: [
  	trigger('fadeState', [
  		state('faded', style({
  			opacity:'0'
  		})),
  		state('visible', style({
  			opacity:'1'
  		})),
  		transition('faded <=> visible', animate('500ms'))
  	])]
})
export class BlurbComponent implements OnInit {
  @Input() skillInput : Skill;
  skill : Skill;
  state : string = 'placeholder';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.toggleFade();
  }

  toggleFade() {
  	this.state = (this.state == 'visible') ? 'faded' : 'visible';
  }

  afterFade() {
  	if (this.state == 'faded') {
  		this.skill = this.skillInput;
  		this.toggleFade();
  	}
  }
}
