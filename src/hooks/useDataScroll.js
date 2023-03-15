import { useMemo, useState } from "react";

import { LIMIT_VISIBLE_ITEMS } from "../constants/limits";

const useDataScroll = (dataArray) => {
  const [visibleData, setVisibleData] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [visible, setVisible] = useState(LIMIT_VISIBLE_ITEMS);

  useMemo(() => setVisibleData(dataArray?.slice(0, LIMIT_VISIBLE_ITEMS)), [dataArray]);
  const fetchData = () => {
    const newLimit = LIMIT_VISIBLE_ITEMS + visible;
    const dataToAdd = dataArray?.slice(visible, newLimit);
    if (dataArray?.length > visibleData?.length) {
      setTimeout(() => {
        setVisibleData([...visibleData].concat(dataToAdd));
      }, 500);
      setVisible(newLimit);
    } else {
      setHasMore(false);
    }
  };
  return { hasMore, fetchData, visibleData, visible };
};
export default useDataScroll;
