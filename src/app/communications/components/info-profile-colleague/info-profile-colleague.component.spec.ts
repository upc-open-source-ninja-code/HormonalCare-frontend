import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProfileColleagueComponent } from './info-profile-colleague.component';

describe('InfoProfileColleagueComponent', () => {
  let component: InfoProfileColleagueComponent;
  let fixture: ComponentFixture<InfoProfileColleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoProfileColleagueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoProfileColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
