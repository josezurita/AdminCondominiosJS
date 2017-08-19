import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesHabitacionalesComponent } from './unidades-habitacionales.component';

describe('UnidadesHabitacionalesComponent', () => {
  let component: UnidadesHabitacionalesComponent;
  let fixture: ComponentFixture<UnidadesHabitacionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesHabitacionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesHabitacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
