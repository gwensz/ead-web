import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { Skill } from '../../skill';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
	selectedSkill : Skill;
  $skills : Observable<any[]>;
	skills : Observable<Skill[]>;

  constructor(db: AngularFirestore, private sanitizer : DomSanitizer) { 
  	this.$skills = db.collection('skills').valueChanges();
  	this.skills = this.$skills.map(
  		lst => lst.map(
  			skill => <Skill>{
	  			Name : skill.name,
		  		Logo : skill.logo,
		  		Tags : skill.tags,
		  		Desc : skill.desc
  			}
  		)
  	);
  }

  cleanTrustedLogo(logo : string) {
  	return this.sanitizer.bypassSecurityTrustUrl('data:image/svg+xml;utf8,' + logo);
  }

  onSelect(skill : Skill) {
    this.selectedSkill = skill;
  }

  ngOnInit() {
  	
  }
}
