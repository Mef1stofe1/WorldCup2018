import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-quarter-final',
  templateUrl: './quarter-final.component.html',
  styleUrls: ['./quarter-final.component.css']
})
export class QuarterFinalComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  ngOnInit() {
    
  }

}
