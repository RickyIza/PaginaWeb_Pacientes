import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPatiensComponent } from './details-patiens.component';

describe('DetailsPatiensComponent', () => {
  let component: DetailsPatiensComponent;
  let fixture: ComponentFixture<DetailsPatiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPatiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPatiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
