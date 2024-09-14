import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPyqComponent } from './upload-pyq.component';

describe('UploadPyqComponent', () => {
  let component: UploadPyqComponent;
  let fixture: ComponentFixture<UploadPyqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPyqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPyqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
