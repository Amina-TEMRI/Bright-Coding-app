import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIconsComponent } from './edit-icons.component';

describe('EditIconsComponent', () => {
  let component: EditIconsComponent;
  let fixture: ComponentFixture<EditIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
