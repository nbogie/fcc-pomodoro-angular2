/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DurationClockPipe } from './duration-clock.pipe';

describe('Pipe: DurationClock', () => {
  it('create an instance', () => {
    let pipe = new DurationClockPipe();
    expect(pipe).toBeTruthy();
  });
});
