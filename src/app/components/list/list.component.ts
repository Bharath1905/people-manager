import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.personService.getAllPeople().subscribe((data) => (this.people = data));
  }

  editPerson(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number): void {
    if (confirm('Are you sure you want to delete this person?')) {
      this.personService.deletePerson(id).subscribe(() => {
        this.people = this.people.filter((person) => person.id !== id);
      });
    }
  }
}
