import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreEditComponent } from './chore-edit.component';

describe('ChoreEditComponent', () => {
  let component: ChoreEditComponent;
  let fixture: ComponentFixture<ChoreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoreEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
