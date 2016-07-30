import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from '../spinner';
import { DurationClockPipe } from '../duration-clock.pipe';
import {Observable} from 'rxjs/Rx';
import { SynthSimple} from '../synth-simple';

@Component({
  moduleId: module.id,
  selector: 'app-timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.css'],
  directives: [SpinnerComponent],
  pipes: [DurationClockPipe]
})
export class TimerComponent implements OnInit {
  breakLen: number;
  sessionLen: number;
  timeRemaining: number; //seconds
  running: boolean;
  startTime: number;
  synth: SynthSimple;
  audioCtx: AudioContext;
  isSoundingAlarm: boolean;

  constructor() {}

  ngOnInit() {
      this.breakLen = 10;
      this.sessionLen = 25;
      this.timeRemaining = this.sessionLen * 60;
      let timer = Observable.timer(0,1000);
      timer.subscribe(t => this.update());

      this.synth = new SynthSimple(new AudioContext());
      this.isSoundingAlarm = false;
  }

  toggleRunning() {
      this.running = !this.running;
      if (this.running) {
          this.start();
      }
  }
  
  start() {
      this.startTime = new Date().getTime();
  }
  
  soundAlarm(){
      this.synth.play();
      this.isSoundingAlarm = true;    
  }

  
  update() {
      //we do it this way rather than incrementing, to survive sleeps, missed updates, and time drift. 
      this.timeRemaining = this.sessionLen * 60 -  ((new Date().getTime()) - this.startTime) / 1000;
      if (this.timeRemaining <= 0){
          this.soundAlarm();
      }
  }

  changeBreakLength(val) {
    this.breakLen = val;
  }

  changeSessionLength(val) {
    this.sessionLen = val;
  }
}
