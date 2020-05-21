export enum ActionType {
  // saga actions
  sagaCreate = 'example/sagaCreate',
  sagaRead = 'example/sagaRead',
  sagaUpdate = 'example/sagaUpdate',
  sagaDelete = 'example/sagaDelete',
  sagaList = 'example/sagaList',

  // reducer actions
  initItem = 'example/initItem',
  storeItem = 'example/storeItem',
  storeList = 'example/storeList',
  storeError = 'example/storeError',
  cleanError = 'example/cleanError'
}

export type ItemWithoutIdT = {
  id?: number;  // 新規作成中のformには、id存在せず
  name?: string
};

export type ItemT = ItemWithoutIdT & {
  id: number;
};

export type StateT = {
  item: ItemT | null;
  list: ItemT[] | null;
  error: string | null;
};

export type SagaCreateRequestT = {
  type: ActionType;
  payload: ItemWithoutIdT;
};

export type SagaCreateResponseT = {
  item?: ItemT;
  error?: string;
};

export type SagaReadRequestPayloadT = {
  id: number;
};

export type SagaReadRequestT = {
  type: ActionType;
  payload: SagaReadRequestPayloadT;
};

export type SagaListRequestPayloadT = {
  startIndex: number;
  count?: number;
  orderBy?: string;
  ascend?: boolean;
};

export type SagaListRequestT = {
  type: ActionType;
  payload: SagaListRequestPayloadT;
};

export type SagaListResponseT = {
  items?: ItemT[];
  error?: string;
};

export type SagaDeleteRequestPayloadT = SagaReadRequestPayloadT;

export type SagaDeleteRequestT = {
  type: ActionType;
  payload: SagaDeleteRequestPayloadT;
};

export type storeErrorPayloadT = {
  error?: string;
};

export type storeErrorT = {
  type: ActionType;
  payload: storeErrorPayloadT;
};

export type storeCleanErrorT = {
  type: ActionType;
};
