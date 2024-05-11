import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RickService } from '../../services/rick.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private readonly rickService: RickService) {}

  @Input() character: any;


  edit(name: string) {
    console.log(name)
  }

  delete(id: number) {
    console.log(id); 
    this.rickService.deleteCharacter(id).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }
}
