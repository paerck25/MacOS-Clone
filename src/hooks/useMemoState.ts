import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { memo_open,memo_close,memo_minimize,memo_maximize } from '../modules/memoState';
import { useCallback } from 'react';

const useMemoState = () => {

  const visible = useSelector((state: RootState) => state.memoState.visible);
  const fullscreen = useSelector((state: RootState) => state.memoState.fullscreen);

  const dispatch = useDispatch();

  const openMemo = useCallback(() => dispatch(memo_open()), [dispatch]);

  const closeMemo = useCallback(() => dispatch(memo_close()), [dispatch]);

  const minMemo = useCallback(() => dispatch(memo_minimize()), [dispatch]);

  const maxMemo = useCallback(() => dispatch(memo_maximize()), [dispatch]);

  return {
    visible,
    fullscreen,
    openMemo,
    closeMemo,
    minMemo,
    maxMemo
  };
}

export default useMemoState;