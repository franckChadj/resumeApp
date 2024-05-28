import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contact = {
    location: 'Ottawa, Ontario',
    phone: '753 881-1946',
    email: 'chadjouaurelien@gmail.com'
  };
}
