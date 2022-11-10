import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayGameComponent } from './replay-game.component';

describe('ReplayGameComponent', () => {
  let component: ReplayGameComponent;
  let fixture: ComponentFixture<ReplayGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplayGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
