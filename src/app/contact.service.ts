import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserContact } from './interface/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  private url = 'assets/user.json';
  allUser:any[] = []
  constructor(private http: HttpClient) {}
  //get data from json file
  getContacts(): Observable<UserContact[]> {
     return this.http.get<UserContact[]>(this.url)
  }

  getContactsJson(): any{
  //   this.contactservice.getContacts().subscribe((data) => {
  //     //get data from json file and localStorage
  //     this.contacts = data;
  //     this.contacts = [...this.contacts,...this.contactservice.getAllContacts()]      
  //   });    
  // }
  this.http.get<UserContact[]>(this.url).subscribe(async (data) => {
    this.allUser =  await data;
  
  
  });
 }


  getAllContacts(): any{
    if ( localStorage !== null) {
      //get all item from storage   
      for (var i = 0; i < localStorage.length; i++){
            const storedDataString = localStorage.getItem('user'+i);
            const storedData: UserContact | null = storedDataString ? JSON.parse(storedDataString) : null;
            this.allUser.unshift(storedData)
        }
        return this.allUser;
      }
      return null
  }
  
  addContact(newContact: UserContact): any {
    //set the array empty to reput the data from localStorage
    this.allUser = []
    const jsonString = JSON.stringify(newContact);
    // Add the data to localStorage
    //set the localStorage.length to item's number  
    localStorage.setItem('user'+localStorage.length, jsonString);
        
  }

}
