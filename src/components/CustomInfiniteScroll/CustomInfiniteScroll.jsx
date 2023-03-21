import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./CustomInfiniteScroll.module.scss";

const CustomInfiniteScroll = ({ dataArray, scrollableTargetId, setData, limit }) => {
  const [visibleData, setVisibleData] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [visible, setVisible] = useState(limit);

  useEffect(() => setVisibleData(dataArray?.slice(0, limit)), [dataArray]);

  const fetchData = useCallback(() => {
    const newLimit = limit + visible;
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
  limit: PropTypes.number.isRequired,
};

export default CustomInfiniteScroll;
