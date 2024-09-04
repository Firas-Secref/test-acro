import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {BoxService} from "../services/box.service";
import {SymbolService} from "../services/symbol.service";
import {Symbol} from "../core/types/Symbol";

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit{
  ngOnInit(): void {

  }

  @Input() boxIndex!: number;
  @Input() boxValue!: Symbol;
  @Output() boxSelection = new EventEmitter<any>()

  boxService = inject(BoxService);
  symbolService = inject(SymbolService);

  selectBox(boxIndex: number) {
    this.boxSelection.emit(boxIndex);
    this.symbolService._symbolColorSource.next(this.boxValue)
  }


}
