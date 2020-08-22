import * as Types from './types';

/**
 * saga に実行させるメッセージを作成する。 これをdispatchしてsagaを実行させる
 * @param payload
 */
export const sagaCreate = (payload: Types.ItemWithoutIdT) => ({ payload, type: Types.ActionType.sagaCreate });

/**
 * reducer に実行させるメッセージを作成する。 これをdispatchしてreducerを実行させる
 */
export const initItem = () => ({ type: Types.ActionType.initItem });

/**
 * saga に実行させるメッセージを作成する。 これをdispatchしてsagaを実行させる
 * @param payload
 */
export const sagaRead = (payload: Types.SagaReadRequestPayloadT) => ({ payload, type: Types.ActionType.sagaRead });

/**
 * reducer に実行させるメッセージを作成する。 これをdispatchしてreducerを実行させる
 * @param payload
 */
export const storeItem = (payload: Types.ItemT) => ({ payload, type: Types.ActionType.storeItem });

/**
 * reducer に実行させるメッセージを作成する。 これをdispatchしてreducerを実行させる
 * @param payload
 */
export const storeList = (payload: Types.ItemT[]) => ({ payload, type: Types.ActionType.storeList });

/**
 * reducer に実行させるメッセージを作成する。 これをdispatchしてreducerを実行させる
 * @param payload
 */
export const storeError = (payload: Types.storeErrorPayloadT) => ({ payload, type: Types.ActionType.storeError });

/**
 * reducer に実行させるメッセージを作成する。 これをdispatchしてreducerを実行させる
 */
export const cleanError = () => ({ type: Types.ActionType.cleanError });
