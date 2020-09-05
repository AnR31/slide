import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidus',
  templateUrl: './slidus.component.html',
  styleUrls: ['./slidus.component.css']
})
export class SlidusComponent implements OnInit {

  buttonDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeToggle() {
    this.buttonDisabled = false;
  }
}
