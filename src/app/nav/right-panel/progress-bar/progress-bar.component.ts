import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progressValue: number;
  progress = {
    color: "primary",
    mode: 'determinate',
    value: this.progressValue,
    tooltip: 'Blood need'
  };
  progressBarModes = {
    high: "warn",
    medium: "medium",
    enough: "primary"
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    const mode = this.progressValue < 30 ? 'high' : (this.progressValue < 60 ? 'medium' : 'enough')
    this.progress = {
      color: this.progressBarModes[mode],
      mode: 'determinate',
      value: this.progressValue,
      tooltip: 'Blood need: ' + mode
    };

  }

}
