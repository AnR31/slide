import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-mybtn',
  templateUrl: './mybtn.component.html',
  styleUrls: ['./mybtn.component.css'],
})
export class MybtnComponent {
  condition: boolean = false;
}
