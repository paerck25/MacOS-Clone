type BrowserAction =
  | ReturnType<typeof browser_open>
  | ReturnType<typeof browser_close>
  | ReturnType<typeof browser_minimize>
  | ReturnType<typeof browser_maximize>

type BrowserState = {
  visible: boolean;
  fullscreen: boolean;
}

const BROWSER_OPEN = 'browserState/BROWSER_OPEN' as const;
const BROWSER_CLOSE = 'browserState/BROWSER_CLOSE' as const;
const BROWSER_MINIMIZE = 'browserState/BROWSER_MINIMIZE' as const;
const BROWSER_MAXIMIZE = 'browserState/BROWSER_MAXIMIZE' as const;

export const browser_open = () => ({ type: BROWSER_OPEN });
export const browser_close = () => ({ type: BROWSER_CLOSE });
export const browser_minimize = () => ({ type: BROWSER_MINIMIZE });
export const browser_maximize = () => ({ type: BROWSER_MAXIMIZE });


const initialState: BrowserState = {
  visible: false,
  fullscreen: false,
};

const stateReducer = (state: BrowserState = initialState, action: BrowserAction) => {

  const { type } = action;

  switch (type) {
    case BROWSER_OPEN:
      return { ...state, visible: true };
    case BROWSER_CLOSE:
      return { ...state, visible: false };
    case BROWSER_MINIMIZE:
      return { ...state, fullscreen: false };
    case BROWSER_MAXIMIZE:
      return { ...state, fullscreen: true };
    default:
      return state;
  }
}

export default stateReducer;