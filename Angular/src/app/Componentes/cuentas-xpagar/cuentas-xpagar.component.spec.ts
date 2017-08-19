import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasXPagarComponent } from './cuentas-xpagar.component';

describe('CuentasXPagarComponent', () => {
  let component: CuentasXPagarComponent;
  let fixture: ComponentFixture<CuentasXPagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasXPagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasXPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
