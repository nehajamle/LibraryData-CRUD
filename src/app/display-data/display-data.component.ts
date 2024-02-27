import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit 
{
  libraryData:any=[];
  editing: boolean[] = [];
  
  constructor(private test:DataService, private router: Router ) {}
  
  ngOnInit(): void 
  {
    this.refreshLibraryData(); 
  }
  
  refreshLibraryData(): void 
  {
    this.test.getData().subscribe(data => {
    this.libraryData = data;
    this.editing = new Array(this.libraryData.length).fill(false);
    });
  }

  deleteClick(bookId: any): void 
  {
    if (confirm('Are you sure??')) 
    {
      this.test.deleteData(bookId).subscribe(() => {
        alert('Data deleted successfully.');
        this.refreshLibraryData(); 
      });
    }
  }

  startEditing(index: number): void {
    this.editing[index] = true;
  }

  stopEditing(index: number, updatedData: any): void {
    this.editing[index] = false;
    this.test.updateData(updatedData).subscribe(() => {
      alert('Data updated successfully.');
      this.refreshLibraryData();
    });
  }
  edit(index: number) 
  {
    this.editing[index] = true;
  }
  save(index: number)
  {
    this.editing[index] = false;
    this.test.updateData(this.libraryData[index]);
  }
  logout()
  {
    this.router.navigate(['/login']);
  }
}