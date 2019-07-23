import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptusComponent } from './adoptus.component';

describe('AdoptusComponent', () => {
  let component: AdoptusComponent;
  let fixture: ComponentFixture<AdoptusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
