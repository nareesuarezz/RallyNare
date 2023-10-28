import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscuderiasAddPage } from './escuderias-add.page';

describe('EscuderiasAddPage', () => {
  let component: EscuderiasAddPage;
  let fixture: ComponentFixture<EscuderiasAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscuderiasAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
