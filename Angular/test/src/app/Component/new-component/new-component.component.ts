import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
  @Input() name!: string;

  constructor() { }

  ngOnInit() {
    console.log('componentName', this.name);
  }

}
