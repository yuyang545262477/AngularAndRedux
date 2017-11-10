import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {createStore, Store, StoreEnhancer} from "redux";
import {AppState} from "./app-state";
import {counterReducer} from "./counter-reducer";

let devTools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;
let store: Store<AppState> = createStore<AppState>(counterReducer, devTools);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
