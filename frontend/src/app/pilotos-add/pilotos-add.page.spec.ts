import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilotosAddPage } from './pilotos-add.page';

describe('PilotosAddPage', () => {
  let component: PilotosAddPage;
  let fixture: ComponentFixture<PilotosAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PilotosAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
