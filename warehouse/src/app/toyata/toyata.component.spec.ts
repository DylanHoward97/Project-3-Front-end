import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyataComponent } from './toyata.component';

describe('ToyataComponent', () => {
  let component: ToyataComponent;
  let fixture: ComponentFixture<ToyataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToyataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
