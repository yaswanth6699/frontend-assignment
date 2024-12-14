import { Fragment, useMemo, useState } from "react";
import { useGetTableData } from "../../hooks/useGetTableData";
import { ERROR_MESSAGE, LOADING_MESSAGE, TABLE_HEADER } from "./constants";
import Pagination from "./Pagination";
import RecordsSelection from "./RecordsSelection";
import "./styles.css";

const Table = () => {
  const [page, setPage] = useState<number>(1);
  const [records, setRecords] = useState<number>(5);

  // Maintain custom hooks for improved code readability and reusability.
  const { data, isLoading, isError } = useGetTableData();

  const { start, end } = useMemo(() => {
    return {
      start: (page - 1) * records,
      end: page * records,
    };
  }, [page, records]);

  if (isLoading) return <h2>{LOADING_MESSAGE}</h2>;
  if (isError) return <h2>{ERROR_MESSAGE}</h2>;

  return (
    <Fragment>
      <div className="table-wrapper">
        <div className="table">
          <h1>Highly Rated Kickstarter</h1>
          <RecordsSelection records={records} setRecords={setRecords} />
          <div className="table-header">
            {TABLE_HEADER.map((head) => (
              <div
                key={head.key}
                className="table-header-cell"
                style={{ width: head.width }}
              >
                {head.name}
              </div>
            ))}
          </div>
          <div className={"table-body"}>
            {data?.slice(start, end).map((cell) => (
              <div className="table-body-row">
                {TABLE_HEADER.map((head) => (
                  <div
                    className="table-header-cell"
                    style={{ width: head.width }}
                  >
                    {cell?.[head.key as keyof typeof cell]}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Pagination
            pages={Math.ceil(data?.length / records)}
            setPage={setPage}
            currentPage={page}
          />
        </div>
      </div>
      <div className="disclaimer">
        *This table is crafted with custom CSS and a fully custom pagination
        feature. It is mobile-responsive and implemented without the use of any
        external libraries.
      </div>
    </Fragment>
  );
};

export default Table;
