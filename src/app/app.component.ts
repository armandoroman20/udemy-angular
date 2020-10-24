import { Component } from '@angular/core';
import {FavoriteChangedArgs} from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  post = {
    title: 'Title',
    isFavorite: true
  };

  onFavoriteChanged(eventArgs: FavoriteChangedArgs) {
    console.log('favorite changed', eventArgs);
  }
}
