import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { openSpaceFeatureKey } from './store';
import { OpenSpaceEffects } from './store/open-space.effects';
import { openSpaceReducer } from './store/open-space.reducer';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [openSpaceFeatureKey]: openSpaceReducer }, {
      runtimeChecks: {
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true,
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true
      }
    }),
    EffectsModule.forRoot([OpenSpaceEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
})
export class AppModule { }
