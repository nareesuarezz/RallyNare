import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CochesAddPage } from './coches-add.page';

describe('CochesAddPage', () => {
  let component: CochesAddPage;
  let fixture: ComponentFixture<CochesAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CochesAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
