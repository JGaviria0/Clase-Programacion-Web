import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { RickService } from './services/rick.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private rickService: RickService) {}

  info: any;

  name = new FormControl('');
  image =  new FormControl('');
  email =  new FormControl('');
  password =  new FormControl('');

  ngOnInit() {
    this.rickService.getCharacters().subscribe((data: any) => {
      this.info = data.results;
    });
  }

  onSummit(){
    const newCharacter = {
      name: this.name.value, 
      avatar: this.image.value,
      email: this.email.value,
      password: this.password.value
    }

    this.rickService.createCharacter(newCharacter).subscribe((res) => {
      console.log(res);
    });
    
  }
}
