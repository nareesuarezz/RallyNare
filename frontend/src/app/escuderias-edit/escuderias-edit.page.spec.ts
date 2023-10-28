import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EscuderiasEditPage } from './escuderias-edit.page';

describe('EscuderiasEditPage', () => {
  let component: EscuderiasEditPage;
  let fixture: ComponentFixture<EscuderiasEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscuderiasEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
