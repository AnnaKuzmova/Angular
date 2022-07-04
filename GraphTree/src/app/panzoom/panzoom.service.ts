import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

export interface PanzoomState {
  scaleValue?: number,
  increaseValue?: number
}

const initialState: PanzoomState = {
  scaleValue: 0.5,
  increaseValue: 0.5
}


@Injectable()
export class PanzoomService {

  private state$ =  new BehaviorSubject<PanzoomState>(initialState);
  stateStream = this.state$.asObservable();

  getState() {
    return this.state$.getValue();
  }

  queryState<K extends keyof PanzoomState>(property: K) {
    return this.stateStream.pipe(
      filter(state => !!state),
      map(state => state[property])
    )
  }

  updateState(value: {}) {
    this.state$.next({...this.getState(), ...value});
  }

  zoomIn() {
    const updatedState = this.getState()['scaleValue']! + this.getState()['increaseValue']!;
    this.updateState({ scaleValue: updatedState })
  }

  zoomOut() {
    if(this.getState()['scaleValue'] === this.getState()['increaseValue']) {
      return;
    }

    const updatedValue = this.getState()['scaleValue']! - this.getState()['increaseValue']!;
    this.updateState({ scaleValue: updatedValue });
  }
}
