import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serv1Component } from './serv1.component';

describe('Serv1Component', () => {
  let component: Serv1Component;
  let fixture: ComponentFixture<Serv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
