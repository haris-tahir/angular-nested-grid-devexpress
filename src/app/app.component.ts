import { Component, HostBinding } from '@angular/core';
import { Employee, Service } from './app.service';
import { AuthService, ScreenService, AppInfoService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent  {
  employees: Employee[];
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService, private service: Service)
  {
    this.employees = service.getEmployees();
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
