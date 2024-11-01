import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = 'alaica';
  email: string = 'alaica@gmail.com';
  password: string = '123';
  confirmPassword: string = '123';

  onSubmit() {
    if (this.password === this.confirmPassword) {
      // Proceed with registration logic
      console.log('Form Submitted:', { name: this.name, email: this.email });
    } else {
      console.error('Passwords do not match');
    }
  }
}