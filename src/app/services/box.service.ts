import {Injectable} from '@angular/core';
import {BehaviorSubject, from, of} from "rxjs";
import {CategoryEnum} from "../core/enums/CategoryEnum";
import {Box} from "../core/types/Box";

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  _orderSource = new BehaviorSubject<any>(0);
  order$ = this._orderSource.asObservable();

  // replace any by boox
  _boxSource = new BehaviorSubject<Box>({index: 0, value: {text: '', category: CategoryEnum.INITIAL, score: 0}})
  boxSelected = this._boxSource.asObservable();

  boxes = of(
    [{
      index: 1,
      value: { text : '', score: 0, category: CategoryEnum.INITIAL}
    },
    {
      index: 2,
      value: { text : '', score: 0, category: CategoryEnum.INITIAL}
    },
    {
      index: 3,
      value: { text : '', score: 0, category: CategoryEnum.INITIAL}
    },
    {
      index: 4,
      value: { text : '', score: 0, category: CategoryEnum.INITIAL}
    },
    {
      index: 5,
      value: { text : '', score: 0, category: CategoryEnum.INITIAL}
    },
    {
      index: 6,
      value: { text : '', score: 0, category: CategoryEnum.INITIAL}
    },
    {
      index: 7,
      value: { text : '', score: 0, category: CategoryEnum.INITIAL}
    },
    {
      index: 8,
      value: { text : '', score: 0, category: CategoryEnum.INITIAL}
    },
    {
      index: 9,
      value: { text : '', score: 0, category: CategoryEnum.INITIAL}
    },
    {
      index: 10,
      value: { text : '', score: 0, category: CategoryEnum.INITIAL}
    }]
  )
  constructor() { }
}

// le box container va ecouter  le box selectionner (l'index) + le symbole selectionner
//
