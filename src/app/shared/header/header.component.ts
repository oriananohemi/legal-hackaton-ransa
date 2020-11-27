import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user = localStorage.getItem('user');

  logo = 'assets/images/ransa-logo.png';

  profile = 'assets/images/profile-icon.png';

  notification = 'assets/images/t-icon.png';

  show = false;

  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
  }

  option() {
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
