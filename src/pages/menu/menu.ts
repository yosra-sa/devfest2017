import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ParticipantsPage}from '../participants/participants';
import{MentorsPage}from'../mentors/mentors';
import { EvaluationPage } from '../evaluation/evaluation';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items=[
    'Participants',
    'Teams',
    'Evaluation'
  ];
  load(item: string){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  loadParticipant(){
    this.navCtrl.push(ParticipantsPage,{
    val:'vjfvfj'
    });
  }
  loadTeams(){
    this.navCtrl.push(MentorsPage,{
    val:'vjfvfj'
    });
  }
  loadEvaluation(){
    this.navCtrl.push(EvaluationPage,{
      val:'erfj'
    });
  }
}
