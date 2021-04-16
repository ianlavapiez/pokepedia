import React from "react";
import AntDTable from "antd/es/table";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Favorite?",
    dataIndex: "isFavorite",
  },
];

interface Props {}

const Table: React.FC<Props> = () => {
  return <AntDTable columns={columns} />;
};

export default Table;
