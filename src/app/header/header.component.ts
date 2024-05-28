import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  name = 'Joseph Chadjou';
  title = 'Software Developer';
  contact = {
    location: 'Ottawa, Ontario',
    phone: '753 881-1946',
    email: 'chadjouaurelien@gmail.com'
  };

}
