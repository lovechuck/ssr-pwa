import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsub: Subscription;

  constructor(private sw: SwUpdate) {

  }

  ngOnInit(): void {
    this.unsub = this.sw.available.subscribe((item: UpdateAvailableEvent) => {
      if (confirm(item.current.appData["msg"])) {
        window.location.reload()
      }
    })
  }

  ngOnDestroy(): void {
    this.unsub.unsubscribe()
  }
}
