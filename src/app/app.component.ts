import {Component, OnInit} from '@angular/core';
import {filter, interval, map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    title = 'instaclone';
    public interval$!: Observable<string>;

    ngOnInit():void {
/*      this.interval$ = interval(1000).pipe(
        filter(value => value % 3 === 0),
        map(value => value % 2 === 0 ?
          `Je suis ${value} et je suis PAIR` :
            `Je suis ${value} et je suis IMPAIR`
        ),
        tap(text => this.logger(text))
      )*/
    }

    public logger(text:string):void {
      console.log(`Log: ${text}`)
    }

}
