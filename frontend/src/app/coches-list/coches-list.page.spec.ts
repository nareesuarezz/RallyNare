import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CochesListPage } from './coches-list.page';

describe('CochesListPage', () => {
  let component: CochesListPage;
  let fixture: ComponentFixture<CochesListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CochesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
