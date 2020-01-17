import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionChienComponent } from './inscription-chien.component';

describe('InscriptionChienComponent', () => {
  let component: InscriptionChienComponent;
  let fixture: ComponentFixture<InscriptionChienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionChienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
