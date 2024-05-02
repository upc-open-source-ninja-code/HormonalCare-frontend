import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoProfileColleagueComponent } from './photo-profile-colleague.component';

describe('PhotoProfileColleagueComponent', () => {
  let component: PhotoProfileColleagueComponent;
  let fixture: ComponentFixture<PhotoProfileColleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoProfileColleagueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoProfileColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
