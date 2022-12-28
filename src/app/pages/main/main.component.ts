import { Component } from '@angular/core';
import { List } from 'src/app/shared/interfaces';
import fakeData from '../../../assets/response.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  data: List = fakeData;
  list = this.data.items

}
