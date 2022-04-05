import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import {ApiService} from '../network/spacexapi.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: any;
  selectedMission?: Mission;



  constructor(private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    // Obtain mission data.
    this.api.getMissions().subscribe((data) => {
      this.missions = data;
    })
  }


  onSelect(mission: Mission) {
    this.selectedMission = mission;
    console.log(this.selectedMission);
  }

  openDetails() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.selectedMission)
      }
    }
    this.router.navigate(['details'], navigationExtras);
  }

}
