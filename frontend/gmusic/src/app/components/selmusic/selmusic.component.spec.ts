import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelmusicComponent } from './selmusic.component';

describe('SelmusicComponent', () => {
  let component: SelmusicComponent;
  let fixture: ComponentFixture<SelmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelmusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
