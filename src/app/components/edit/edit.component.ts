import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  person: Person = { id: 0, name: '', email: '', age: 0 };

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.personService.getPerson(id).subscribe((data) => (this.person = data));
  }

  updatePerson(): void {
    this.personService.updatePerson(this.person.id, this.person).subscribe(() => {
      alert('Person updated successfully');
      this.router.navigate(['/']);
    });
  }
}
