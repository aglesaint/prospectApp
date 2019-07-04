import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProspectsComponent } from './id-prospects.component';

describe('IdProspectsComponent', () => {
  let component: IdProspectsComponent;
  let fixture: ComponentFixture<IdProspectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdProspectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
