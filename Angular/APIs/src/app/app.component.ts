import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { RickService } from './services/rick.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular2';

  constructor(private rickService: RickService) {}

  info: any;

  ngOnInit() {
    this.rickService.getCharacters().subscribe((data: any) => {
      console.log(data.results);
      this.info = data.results;
    });
  }
}
