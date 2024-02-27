import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit
{
  libraryData:any=[];
  bookId:string="";        
  bookName:string="";
  bookAuthor:string="";
  issueBook!:Date;
  submitDate!:Date;
  studentName:string="";

  constructor(private test: DataService,private router: Router,){}

  ngOnInit(): void {
    this.refreshLibraryData();
  } 
  
  refreshLibraryData(): void {
    this.test.getData().subscribe(data => {
      this.libraryData = data;
    });
  } 

  onSubmit(): any 
  {
    const userForm = {   
                        bookId:this.bookId,        
                        bookName:this.bookName,
                        bookAuthor:this.bookAuthor,
                        issueBook:this.issueBook,
                        submitDate:this.submitDate,
                        studentName:this.studentName
                      };
    this.test.addData(userForm);
    this.test.addData(userForm).subscribe(res=>{
      alert(res.toString());
      console.log("Data Added"); 
      this.router.navigate(['/display-data']);
    });
  } 
}