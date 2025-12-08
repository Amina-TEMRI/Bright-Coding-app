import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIconsComponent } from './add-icons.component';

describe('AddIconsComponent', () => {
  let component: AddIconsComponent;
  let fixture: ComponentFixture<AddIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
