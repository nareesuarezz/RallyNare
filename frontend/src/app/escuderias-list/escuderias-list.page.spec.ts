import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscuderiasListPage } from './escuderias-list.page';

describe('EscuderiasListPage', () => {
  let component: EscuderiasListPage;
  let fixture: ComponentFixture<EscuderiasListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscuderiasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
