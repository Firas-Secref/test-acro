import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Symbol} from "../core/types/Symbol";
import {CategoryEnum} from "../core/enums/CategoryEnum";

@Injectable({
  providedIn: 'root'
})
export class SymbolService {


  _symbolSource = new BehaviorSubject<Symbol>({text: '', category: CategoryEnum.INITIAL, score: 0});
  selectedSymbol = this._symbolSource.asObservable();

  _symbolColorSource = new BehaviorSubject<Symbol>({text: '', category: CategoryEnum.INITIAL, score: 0});
  symbolColor$ = this._symbolColorSource.asObservable();

  constructor() { }
}
