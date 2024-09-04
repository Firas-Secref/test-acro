import {Component, inject, OnInit} from '@angular/core';
import {BoxComponent} from "../box/box.component";
import {BoxService} from "../services/box.service";
import {CategoryEnum} from "../core/enums/CategoryEnum";
import {from, map, Observable, of, switchMap, tap, withLatestFrom} from "rxjs";
import {SymbolService} from "../services/symbol.service";
import {AsyncPipe} from "@angular/common";
import {Box} from "../core/types/Box";

@Component({
  selector: 'app-box-container',
  standalone: true,
  imports: [
    BoxComponent,
    AsyncPipe
  ],
  templateUrl: './box-container.component.html',
  styleUrl: './box-container.component.scss',
})
export class BoxContainerComponent implements OnInit{

  totalValue = 0;
  selectedBox !: Box;
  private firstLoad = true;

  ngOnInit(): void {
    this.setInitialBoxes();
    this.symbolService.selectedSymbol.pipe(
      withLatestFrom(this.boxService.boxSelected),
      tap(([symbolSelected, boxSelected])=>{
        this.boxService._boxSource.next({index: boxSelected.index, value: symbolSelected})
        // this.boxService._boxSource.next({index: boxSelected.index < 10 ? boxSelected.index+1 : boxSelected.index, value: {text: '', score: 0, category:CategoryEnum.INITIAL}})

        if((boxSelected.value.text !== symbolSelected.text) && boxSelected.value.text ===''){
          this.totalValue+=symbolSelected.score;
          localStorage.setItem('totalValue', this.totalValue.toString())
        }
        if((boxSelected.value.text !== symbolSelected.text) && boxSelected.value.text !==''){
          this.totalValue = this.totalValue - boxSelected.value.score +symbolSelected.score;
          localStorage.setItem('totalValue', this.totalValue.toString())
        }
        // move to next box

      }),
      switchMap(([selectedSymbol,selectedBox])=>{

        this.selectedBox = {index: selectedBox.index, value: selectedSymbol};
        this.boxes = this.boxes.pipe(
          map((boxes: Box[])=>{
            return boxes.map((boxItem: Box)=>{
              if (boxItem.index === selectedBox.index){
                return {index: boxItem.index, value: selectedSymbol}
              }
              return boxItem;
            })
          })
        )
        return from(this.boxes)
      })
    ).subscribe((boxesData=>{
      console.log(boxesData)
      if (!this.firstLoad) localStorage.setItem('boxHistory', JSON.stringify(boxesData))
    }))
  }

  boxService = inject(BoxService);
  symbolService = inject(SymbolService);


  setOrder(i: number, boxItem: Box) {
    console.log("box", boxItem)
    this.symbolService._symbolColorSource.next(boxItem.value)
    this.boxService._boxSource.next({index: i, value: {text: '', category: CategoryEnum.INITIAL, score: 0}});
  }


  // boxes = localStorage.getItem('boxHistory') ? JSON.parse(localStorage.getItem('boxHistory')!) : this.boxService.boxes;
  boxes!: Observable<Box[]>;

  clearBoxes() {
    this.boxes = this.boxService.boxes;
    localStorage.clear();
    this.totalValue = 0;
  }

  setInitialBoxes(){
    if (this.firstLoad){
      this.boxes = localStorage.getItem('boxHistory') ? of(JSON.parse(localStorage.getItem('boxHistory')!)) : this.boxService.boxes;
      this.totalValue = localStorage.getItem('totalValue') ? parseFloat(localStorage.getItem('totalValue')!) : 0
      this.firstLoad = false
    }
  }
}
