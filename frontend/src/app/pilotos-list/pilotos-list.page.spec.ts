import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilotosListPage } from './pilotos-list.page';

describe('PilotosListPage', () => {
  let component: PilotosListPage;
  let fixture: ComponentFixture<PilotosListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PilotosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
