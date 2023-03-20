import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./CustomInfiniteScroll.module.scss";

const LIMIT_VISIBLE_ITEMS = 15;

const CustomInfiniteScroll = ({ dataArray, scrollableTargetId, setData }) => {
  const [visibleData, setVisibleData] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [visible, setVisible] = useState(LIMIT_VISIBLE_ITEMS);

  useEffect(() => setVisibleData(dataArray?.slice(0, LIMIT_VISIBLE_ITEMS)), [dataArray]);

  const fetchData = useCallback(() => {
    const newLimit = LIMIT_VISIBLE_ITEMS + visible;
    const dataToAdd = dataArray?.slice(visible, newLimit);

    if (dataArray?.length > visibleData?.length) {
      setTimeout(() => {
        setVisibleData([...visibleData, ...dataToAdd]);
      }, 500);
      setVisible(newLimit);
    } else {
      setHasMore(false);
    }
  });

  useEffect(() => {
    setData(visibleData);
  }, [visibleData]);

  return (
    <InfiniteScroll
      dataLength={visibleData?.length || visible}
      next={fetchData}
      hasMore={hasMore}
      loader={<p className={styles.Message}>Loading...</p>}
      scrollableTarget={scrollableTargetId}
      endMessage={<p className={styles.Message}>No More Data</p>}
    />
  );
};

CustomInfiniteScroll.propTypes = {
  dataArray: PropTypes.array,
  scrollableTargetId: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  refHeight: PropTypes.number,
};

export default CustomInfiniteScroll;
