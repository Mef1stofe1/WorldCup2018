import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-play-off',
  templateUrl: './play-off.component.html',
  styleUrls: ['./play-off.component.css']
})
export class PlayOffComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  ngOnInit() {
    this.manager.loadPlayOffStageMatches();
  }

}
