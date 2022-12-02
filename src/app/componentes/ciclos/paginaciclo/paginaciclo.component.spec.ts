import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacicloComponent } from './paginaciclo.component';

describe('PaginacicloComponent', () => {
  let component: PaginacicloComponent;
  let fixture: ComponentFixture<PaginacicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginacicloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginacicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
