import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadmusicComponent } from './cadmusic.component';

describe('CadmusicComponent', () => {
  let component: CadmusicComponent;
  let fixture: ComponentFixture<CadmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadmusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
