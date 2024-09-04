import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolItemComponent } from './symbol-item.component';

describe('SymbolItemComponent', () => {
  let component: SymbolItemComponent;
  let fixture: ComponentFixture<SymbolItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymbolItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymbolItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
