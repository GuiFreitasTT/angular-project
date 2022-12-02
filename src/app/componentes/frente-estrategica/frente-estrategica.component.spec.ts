import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenteEstrategicaComponent } from './frente-estrategica.component';

describe('FrenteEstrategicaComponent', () => {
  let component: FrenteEstrategicaComponent;
  let fixture: ComponentFixture<FrenteEstrategicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrenteEstrategicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrenteEstrategicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
