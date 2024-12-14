import axios from "axios";
import { useEffect, useState } from "react";
import { TABLE_DATA_URL } from "../apis";
import { ERROR_MESSAGE } from "../Components/Table/constants";
import { TableDataProps } from "../types";

export const useGetTableData = () => {
  const [tableData, toggleTableData] = useState<TableDataProps>({
    data: [],
    isLoading: false,
    isError: false,
  });

  // Always use a try/catch block to handle errors gracefully and prevent unexpected UI interruptions.
  const fetchTableData = async () => {
    toggleTableData({ data: [], isLoading: true, isError: false });
    try {
      const { data } = await axios.get<TableDataProps["data"]>(TABLE_DATA_URL);
      toggleTableData({ data, isLoading: false, isError: false });
    } catch (err) {
      toggleTableData({ data: [], isLoading: false, isError: true });
      console.log(ERROR_MESSAGE, err);
    }
  };

  useEffect(() => {
    // if data is already available in state don't need to recall fetch function again
    if (tableData.data.length) return;
    fetchTableData();
  }, [tableData.data.length]);

  return {
    ...tableData,
  };
};
