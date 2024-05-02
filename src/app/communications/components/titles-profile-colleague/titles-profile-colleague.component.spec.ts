import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesProfileColleagueComponent } from './titles-profile-colleague.component';

describe('TitlesProfileColleagueComponent', () => {
  let component: TitlesProfileColleagueComponent;
  let fixture: ComponentFixture<TitlesProfileColleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitlesProfileColleagueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitlesProfileColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
