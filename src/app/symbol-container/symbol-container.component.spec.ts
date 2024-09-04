import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolContainerComponent } from './symbol-container.component';

describe('SymbolContainerComponent', () => {
  let component: SymbolContainerComponent;
  let fixture: ComponentFixture<SymbolContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymbolContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymbolContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
