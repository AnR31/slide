import { Component } from '@angular/core';

@Component({
  selector: 'app-mybtn',
  templateUrl: './mybtn.component.html',
  styleUrls: ['./mybtn.component.css']
})
export class MybtnComponent {
  onSubmit() {
    alert('You click the button!');
  }
}
