import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxNgbaseComponent } from './bmx-ngbase.component';

describe('BmxNgbaseComponent', () => {
  let component: BmxNgbaseComponent;
  let fixture: ComponentFixture<BmxNgbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmxNgbaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmxNgbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
