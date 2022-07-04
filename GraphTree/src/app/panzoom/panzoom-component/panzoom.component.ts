import { AfterContentInit, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { buffer, debounce, debounceTime, filter, fromEvent, map, merge, Observable, Subscription, tap, throttleTime } from 'rxjs';
import { PanzoomService, PanzoomState } from '../panzoom.service';

@Component({
  selector: 'app-panzoom',
  templateUrl: './panzoom.component.html',
  styleUrls: ['./panzoom.component.scss'],
  providers: [PanzoomService]
})
export class PanzoomComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {
  @ViewChild('panzoomComponent', {static: false}) panzoomWrapper!: ElementRef;
  @ViewChild('panZoomInnerHolder', { static: false }) panZoomInnerHolder!: ElementRef;

  config = {
    defaultScale: 0.5,
    increaseByValue: 0.5
  }

  scaleValue$ = this.panzoomService.queryState('scaleValue');
  increaseValue = this.panzoomService.queryState('increaseValue');
  
  private subscriptions: Subscription = new Subscription();
  private clickStream$!: Observable<Partial<MouseEvent>>; 
  private wheelStream$!: Observable<WheelEvent>;
  private wheelUpStream$!: Observable<Partial<WheelEvent>>;
  private wheelDownStream$!: Observable<Partial<WheelEvent>>;

  constructor(
    private renderer: Renderer2,
    private panzoomService: PanzoomService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.clickStream$ = fromEvent(this.panzoomWrapper.nativeElement, 'click');
    this.wheelStream$ = fromEvent(this.panzoomWrapper.nativeElement, 'wheel');

    this.wheelDownStream$ = this.wheelStream$.pipe(
      map(({deltaX, deltaY, clientX, clientY}) => ({deltaX, deltaY, clientX, clientY})),
      filter(v => v.deltaY > 0)
    );
    this.wheelUpStream$ = this.wheelStream$.pipe(
      map(({deltaX, deltaY, clientX, clientY}) => ({deltaX, deltaY, clientX, clientY})),
      filter(v => v.deltaY < 0)
    );


    this.subscriptions.add(
      merge(
        this.clickStream$.pipe(
          buffer(this.clickStream$.pipe(debounceTime(300))),
          filter(v => v.length === 2),
          map(v => v[1]),
          map(({clientX, clientY}) => {
            return {clientX, clientY}
          })
          
      ),
      this.wheelUpStream$
      ).pipe(
        tap(v => {
          this.panzoomService.zoomIn();
        })
      ).subscribe()
    );

    this.subscriptions.add(
      this.wheelDownStream$.pipe(tap(v => {
        this.panzoomService.zoomOut();
      })).subscribe()
    );

    this.subscriptions.add(this.panzoomService.stateStream.pipe(
      tap((state) => this.updateView(state))
    ).subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngAfterContentInit(): void {
  }

  updateView(panzoomState: PanzoomState) {
    this.renderer.setStyle(this.panZoomInnerHolder.nativeElement, 'transform', `scale(${panzoomState.scaleValue})`)
  }

}
