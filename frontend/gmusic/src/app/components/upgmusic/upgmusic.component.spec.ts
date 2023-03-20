import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgmusicComponent } from './upgmusic.component';

describe('UpgmusicComponent', () => {
  let component: UpgmusicComponent;
  let fixture: ComponentFixture<UpgmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgmusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
