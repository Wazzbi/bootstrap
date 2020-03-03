import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrapTrial';
  iconClass = 'glyphicon glyphicon-star-empty';

  changeIcon() {
    const icon =
      this.iconClass === 'glyphicon glyphicon-star-empty'
        ? 'glyphicon glyphicon-star'
        : 'glyphicon glyphicon-star-empty';
    this.iconClass = icon;
  }
}
