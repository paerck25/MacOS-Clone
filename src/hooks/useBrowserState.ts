import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { browser_open,browser_close,browser_minimize,browser_maximize } from '../modules/browserState';
import { useCallback } from 'react';

const useBrowserState = () => {

  const visible = useSelector((state: RootState) => state.browserState.visible);
  const fullscreen = useSelector((state: RootState) => state.browserState.fullscreen);

  const dispatch = useDispatch();

  const openBrowser = useCallback(() => dispatch(browser_open()), [dispatch]);

  const closeBrowser = useCallback(() => dispatch(browser_close()), [dispatch]);

  const minBrowser = useCallback(() => dispatch(browser_minimize()), [dispatch]);

  const maxBrowser = useCallback(() => dispatch(browser_maximize()), [dispatch]);

  return {
    visible,
    fullscreen,
    openBrowser,
    closeBrowser,
    minBrowser,
    maxBrowser
  };
}

export default useBrowserState;