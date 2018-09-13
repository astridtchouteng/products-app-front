import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _service: AuthenticationService) { }

  ngOnInit() {
  }
  isLoggedIn(): boolean {
  return this._service.isLoggedIn();
  }

  getJwtSubjet(): string {
  return this._service.getJwtSubjet();
  }

}
