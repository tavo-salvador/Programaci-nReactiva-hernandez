import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watch1Component } from './watch1.component';

describe('Watch1Component', () => {
  let component: Watch1Component;
  let fixture: ComponentFixture<Watch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Watch1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Watch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
