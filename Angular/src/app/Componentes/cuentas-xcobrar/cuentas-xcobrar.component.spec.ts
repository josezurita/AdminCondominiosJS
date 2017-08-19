import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasXcobrarComponent } from './cuentas-xcobrar.component';

describe('CuentasXcobrarComponent', () => {
  let component: CuentasXcobrarComponent;
  let fixture: ComponentFixture<CuentasXcobrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasXcobrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasXcobrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
