import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStaticSearchComponent } from './ngx-static-search.component';

describe('NgxStaticSearchComponent', () => {
  let component: NgxStaticSearchComponent;
  let fixture: ComponentFixture<NgxStaticSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStaticSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStaticSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
