import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupidogsComponent } from './cupidogs.component';



describe('CupidogsComponent', () => {
  let component: CupidogsComponent;
  let fixture: ComponentFixture<CupidogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupidogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupidogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





