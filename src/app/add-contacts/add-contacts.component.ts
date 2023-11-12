import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { UserContact } from '../interface/contact'

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {

  show:boolean = false;
  newContact:UserContact = { name: '', surname: '', phone: '' };

  constructor(private contactservice: ContactService) { }

  ngOnInit(): void {
  }

  addNewContact():void {
    this.contactservice.addContact(this.newContact);
    //show text if user beging added
    this.show = true
    //set the form empty
    this.newContact = { name: '', surname: '', phone: '' };
    
  }

}
