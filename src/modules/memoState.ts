type MemoAction =
  | ReturnType<typeof memo_open>
  | ReturnType<typeof memo_close>
  | ReturnType<typeof memo_minimize>
  | ReturnType<typeof memo_maximize>

type MemoState = {
  visible: boolean;
  fullscreen: boolean;
}

const MEMO_OPEN = 'memoState/MEMO_OPEN' as const;
const MEMO_CLOSE = 'memoState/MEMO_CLOSE' as const;
const MEMO_MINIMIZE = 'memoState/MEMO_MINIMIZE' as const;
const MEMO_MAXIMIZE = 'memoState/MEMO_MAXIMIZE' as const;

export const memo_open = () => ({ type: MEMO_OPEN });
export const memo_close = () => ({ type: MEMO_CLOSE });
export const memo_minimize = () => ({ type: MEMO_MINIMIZE });
export const memo_maximize = () => ({ type: MEMO_MAXIMIZE });


const initialState: MemoState = {
  visible: false,
  fullscreen: false,
};

const stateReducer = (state: MemoState = initialState, action: MemoAction) => {

  const { type } = action;

  switch (type) {
    case MEMO_OPEN:
      return { ...state, visible: true };
    case MEMO_CLOSE:
      return { ...state, visible: false };
    case MEMO_MINIMIZE:
      return { ...state, fullscreen: false };
    case MEMO_MAXIMIZE:
      return { ...state, fullscreen: true };
    default:
      return state;
  }
}

export default stateReducer;