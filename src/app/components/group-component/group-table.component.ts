import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { Group } from '../../models/group-model';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.css']
})

var groupsList: Array<Group>;
export class GroupTableComponent implements OnInit {

  constructor(private manager: ManagerService) { }

  ngOnInit() {
    groupsList = this.manager.loadGroupStageStandings();
  }

}
