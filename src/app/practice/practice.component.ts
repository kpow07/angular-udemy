import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: 'practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit {
  userName = '';
  showSecret = false;
  clicks = [];

  constructor() {}

  ngOnInit(): void {}

  resetUserName() {
    this.userName = '';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.clicks.push(new Date());
  }
}
