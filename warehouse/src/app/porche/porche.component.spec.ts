import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcheComponent } from './porche.component';

describe('PorcheComponent', () => {
  let component: PorcheComponent;
  let fixture: ComponentFixture<PorcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
