import { Component, OnInit } from '@angular/core';
import { SService } from 'src/app/ser/s.service';

@Component({
  selector: 'app-de',
  templateUrl: './de.component.html',
  styleUrls: ['./de.component.css']
})
export class DeComponent implements OnInit {

  constructor(public svs:SService) { 
    
  }

  ngOnInit() {
  }

}
