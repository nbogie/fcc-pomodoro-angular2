import { Input, Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() name;
  @Input() duration;
  @Output() changed = new EventEmitter<number>();
  
  constructor() {}

  ngOnInit() {
  }

  incDuration(amt) {
      this.duration += amt;
      if (this.duration > 59) {
          this.duration = 59;
      }
      this.changed.emit(this.duration);
  }

  decDuration(amt) {
      this.duration -= amt;
      if (this.duration < 0) {
          this.duration = 0;
      }
      this.changed.emit(this.duration);
  }
}
