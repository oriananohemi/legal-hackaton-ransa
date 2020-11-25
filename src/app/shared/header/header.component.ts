import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo = 'assets/images/ransa-logo.png';

  profile = 'assets/images/profile-icon.png';

  notification = 'assets/images/t-icon.png';

  constructor() { }

  ngOnInit(): void {
  }

}
