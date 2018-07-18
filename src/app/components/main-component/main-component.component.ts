import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service'

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  ngOnInit() {
    this.manager.loadCupStandings();
  }

}
