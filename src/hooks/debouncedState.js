import debounce from "lodash.debounce";
import { useEffect, useState } from "react";

const useDebouncedState = (state, delay = 500) => {
  const [debouncedState, setDebouncedState] = useState(state);

  useEffect(() => {
    const debounced = debounce(() => {
      setDebouncedState(state);
    }, delay);

    debounced();

    return () => {
      debounced.cancel();
    };
  }, [state, delay]);

  return debouncedState;
};

export default useDebouncedState;
