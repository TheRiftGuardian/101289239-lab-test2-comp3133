import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {


  mission: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params['special']) {
        console.log('params: ', params);
        this.mission = JSON.parse(params['special']);
      }
    })

   }

   goBack() {
    this.router.navigate(['home']);
   }

  ngOnInit(): void {
  }

}
