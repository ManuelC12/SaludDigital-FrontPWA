import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditacionesComponent } from './meditaciones.component';

describe('MeditacionesComponent', () => {
  let component: MeditacionesComponent;
  let fixture: ComponentFixture<MeditacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeditacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
