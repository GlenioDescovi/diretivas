import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgIfComponent } from './diretivas-ng-if.component';

describe('DiretivasNgIfComponent', () => {
  let component: DiretivasNgIfComponent;
  let fixture: ComponentFixture<DiretivasNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
