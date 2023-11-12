import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { UserContact } from '../interface/contact'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  contacts:UserContact[] = [];

  constructor(private contactservice: ContactService) { }

  ngOnInit(): void {
    this.contactservice.getContacts().subscribe((data) => {
      //get data from json file and localStorage
      this.contacts = data;
      this.contacts = [...this.contactservice.getAllContacts(),...this.contacts]      
    });    
    
  }
  
 
}
