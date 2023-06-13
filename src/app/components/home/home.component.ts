import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private apiservice : ApiserviceService
  ) {

  }
  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  callAPI() {
    let URL = 'https://dummy.com/test'
    this.apiservice.getdata(URL).subscribe((data: any) => {
      if (data.status == 200) {
       alert("Response recived!")
      } else {
        alert("Some thing went wrong!")
      }
      
    }, err => {
      alert("Some thing went wrong!")
    })
  }
}
