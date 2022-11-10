import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPlayerInfoComponent } from './no-player-info.component';

describe('NoPlayerInfoComponent', () => {
  let component: NoPlayerInfoComponent;
  let fixture: ComponentFixture<NoPlayerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPlayerInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
