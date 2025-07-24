import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
 member: Member = {
  name: '',
  age: 0,
  email: '',
  role: 'child'
};

  isEditMode = false;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.memberService.getMember(id).subscribe((member) => {
          this.member = member;
        });
      }
    });
  }

  onSubmit(form: NgForm): void {
    if (this.isEditMode) {
      this.memberService.updateMember(this.member);
    } else {
      this.memberService.addMember(this.member);
    }
    this.router.navigate(['/members']);
  }
}


