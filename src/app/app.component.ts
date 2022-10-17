import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { actionWithoutPayload, actionWithPayload, currentLevel as currentLearningLevel } from './store';

@Component({
  selector: 'app-root',
  template: `{{ learningLevel$ | async }}`,
})
export class AppComponent implements OnInit {
  learningLevel$: Observable<number>;

  constructor(private store: Store) {
    this.learningLevel$ = this.store.select(currentLearningLevel);
  }

  ngOnInit(): void {
    // Dispatching several actions to see something in the DevTools:
    // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

    this.store.dispatch(actionWithoutPayload());

    this.store.dispatch(actionWithPayload({ level: 100 }));

    this.store.dispatch(actionWithPayload({ level: 200 }));

    this.store.dispatch(actionWithPayload({ level: 300 }));

    this.store.dispatch(actionWithPayload({ level: 400 }));

    this.store.dispatch(actionWithPayload({ level: 500 }));
  }
}
