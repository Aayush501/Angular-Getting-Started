import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';
  Image = "assets/BL_logo_square_jpg.jpg";
  userName: string = "";
  nameError: string = "";

  ngOnInit() {
    this.title = "Hello From Bridgelabz";
  }

  openBridgeLabz() {
    window.open("https://www.bridgelabz.com/", "_blank");
  }

  onInput($event : any) {
    console.log("Change Event Occurred!", $event.data);
    const nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$");
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is incorrect !!!";
  }
}