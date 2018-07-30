import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticbgComponent } from './staticbg.component';

describe('StaticbgComponent', () => {
  let component: StaticbgComponent;
  let fixture: ComponentFixture<StaticbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
