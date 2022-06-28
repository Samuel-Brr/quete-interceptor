import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'atelierRouteur';

  constructor(private httpService: HttpService){
  }

  ngOnInit(): void {
    this.httpService.getFakeApi().subscribe()
  }


}
