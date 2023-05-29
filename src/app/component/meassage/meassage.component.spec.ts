import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeassageComponent } from './meassage.component';

describe('MeassageComponent', () => {
  let component: MeassageComponent;
  let fixture: ComponentFixture<MeassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeassageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
