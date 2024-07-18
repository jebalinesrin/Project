import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationDirectComponent } from './formation-direct.component';

describe('FormationDirectComponent', () => {
  let component: FormationDirectComponent;
  let fixture: ComponentFixture<FormationDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationDirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
