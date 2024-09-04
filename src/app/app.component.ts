import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BoxComponent} from "./box/box.component";
import {BoxContainerComponent} from "./box-container/box-container.component";
import {SymbolContainerComponent} from "./symbol-container/symbol-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxComponent, BoxContainerComponent, SymbolContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
