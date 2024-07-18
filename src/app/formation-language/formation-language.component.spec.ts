import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationLanguageComponent } from './formation-language.component';

describe('FormationLanguageComponent', () => {
  let component: FormationLanguageComponent;
  let fixture: ComponentFixture<FormationLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
