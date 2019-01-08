import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsOverviewComponent } from './maps-overview.component';

describe('MapsOverviewComponent', () => {
  let component: MapsOverviewComponent;
  let fixture: ComponentFixture<MapsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
