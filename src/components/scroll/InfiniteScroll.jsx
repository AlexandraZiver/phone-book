import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { LIMIT_VISIBLE_ITEMS } from "../../constants/limits";
import styles from "./InfiniteScroll.module.scss";

const InfiniteScrollElement = ({ dataArray, scrollableTargetId, getData }) => {
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

  return (
    <>
      {getData(visibleData)}
      <InfiniteScroll
        dataLength={visibleData?.length || visible}
        next={fetchData}
        hasMore={hasMore}
        loader={<p className={styles.Message}>Loading...</p>}
        scrollableTarget={scrollableTargetId}
        endMessage={<p className={styles.Message}>No More Data</p>}></InfiniteScroll>
    </>
  );
};

InfiniteScrollElement.propTypes = {
  dataArray: PropTypes.array,
  scrollableTargetId: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};

export default InfiniteScrollElement;
