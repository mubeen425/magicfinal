import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import PageTitle from "../../../layouts/PageTitle";
import MOCK_DATA from "./MOCK_DATA_3.json";
import { COLUMNS } from "./Columns";
import { fetchUsers } from "../../../../store/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
//import './table.css';

export const SortingTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  //   const data = useMemo(() => MOCK_DATA, []);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const [data, setData] = useState([]);
  const tableInstance = useTable({ columns, data }, useSortBy);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  console.log(users);
  useEffect(() => {
    if (!loading && !error) {
      setData(users);
    }
  }, [loading, error, users]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //footerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <>
      <PageTitle activeMenu="Sorting" motherMenu="Table" />
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Table Sorting</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div className="dataTables_wrapper">
              <table {...getTableProps()} className="table dataTable display">
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render("Header")}
                          <span className="ml-1">
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <i
                                  className="fa fa-arrow-down ms-2 fs-14"
                                  style={{ opacity: "0.7" }}
                                />
                              ) : (
                                <i
                                  className="fa fa-arrow-up ms-2 fs-14"
                                  style={{ opacity: "0.7" }}
                                />
                              )
                            ) : (
                              <i
                                className="fa fa-sort ms-2 fs-14"
                                style={{ opacity: "0.3" }}
                              />
                            )}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {" "}
                              {cell.render("Cell")}{" "}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
                {/* This is only for footer if u require */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingTable;
