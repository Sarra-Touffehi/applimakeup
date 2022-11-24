import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/marque';
import { MarqueService } from 'src/app/marque.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  marques!:Marque[];

  constructor(private marqueService : MarqueService) { }

  ngOnInit(): void {

    this.marqueService.getMarque().subscribe(data => this.marques=data);
  }

}
