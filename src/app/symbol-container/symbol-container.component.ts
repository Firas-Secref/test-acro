import {Component, inject, OnInit} from '@angular/core';
import {symbolsArray, Symbol} from "../core/types/Symbol";
import {SymbolItemComponent} from "../symbol-item/symbol-item.component";
import {CategoryEnum} from "../core/enums/CategoryEnum";
import {BoxService} from "../services/box.service";
import {SymbolService} from "../services/symbol.service";

@Component({
  selector: 'app-symbol-container',
  standalone: true,
  imports: [
    SymbolItemComponent
  ],
  templateUrl: './symbol-container.component.html',
  styleUrl: './symbol-container.component.scss'
})
export class SymbolContainerComponent implements OnInit{
  public symbolToBeColored!: Symbol;

  ngOnInit(): void {
    this.symbolService.symbolColor$.subscribe((symbolToColor: Symbol)=>{
      this.symbolToBeColored = symbolToColor;
    })
  }

  protected readonly symbolsArrayFS = symbolsArray.filter(s=>s.category === CategoryEnum.FS);
  protected readonly symbolsArrayBS = symbolsArray.filter(s=>s.category === CategoryEnum.BS);
  protected readonly symbolsArrayOther = symbolsArray.filter(s=>s.category === CategoryEnum.OTHER);
  protected readonly CategoryEnum = CategoryEnum;

  symbolService = inject(SymbolService);

  selectSymbol(sym: Symbol) {
    this.symbolService._symbolSource.next(sym);
    this.symbolService._symbolColorSource.next(sym)


  }
}
