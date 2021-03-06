import { Injectable } from '@angular/core';
import { Actor } from './actor.model';
import { EntityState, EntityStore, StoreConfig } from '../../../../../../akita/src';

export interface State extends EntityState<Actor> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'actors' })
export class ActorsStore extends EntityStore<State, Actor> {
  constructor() {
    super();
  }
}
