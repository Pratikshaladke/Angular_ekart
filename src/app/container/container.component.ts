import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ConatinerComponent {
 listOfStrings:string[] = ["Mark","Steve","John","Sarah"];
}
