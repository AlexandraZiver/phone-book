import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./InfiniteScroll.module.scss";

const screenHeight = window.screen.height;
const LIMIT_VISIBLE_ITEMS = screenHeight / 64;

const InfiniteScrollElement = ({ dataArray, scrollableTargetId, setData }) => {
  const [visibleData, setVisibleData] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [visible, setVisible] = useState(LIMIT_VISIBLE_ITEMS);

  useEffect(() => setVisibleData(dataArray?.slice(0, LIMIT_VISIBLE_ITEMS)), [dataArray]);

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

InfiniteScrollElement.propTypes = {
  dataArray: PropTypes.array,
  scrollableTargetId: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
};

export default InfiniteScrollElement;
