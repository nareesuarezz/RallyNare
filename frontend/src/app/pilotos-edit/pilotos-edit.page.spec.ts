import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PilotosEditPage } from './pilotos-edit.page';

describe('PilotosEditPage', () => {
  let component: PilotosEditPage;
  let fixture: ComponentFixture<PilotosEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PilotosEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
