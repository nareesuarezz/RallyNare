import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CochesEditPage } from './coches-edit.page';

describe('CochesEditPage', () => {
  let component: CochesEditPage;
  let fixture: ComponentFixture<CochesEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CochesEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
