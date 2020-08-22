import { types as ExampleTypes } from './example';

export type TopState = {
  example: ExampleTypes.StateT;
};

export type SagaGenericRequestT = {
  type: never;
  payload: never;
};
