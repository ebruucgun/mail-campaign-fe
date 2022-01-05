import React from "react";
import MUIDataTable from "mui-datatables";

const table = props => {
    const options = {
      filterType: "dropdown",
      responsive: "stacked"
    };

  return (
    <MUIDataTable
      title={""}
      data={props.children[1]}
      columns={props.children[3]}
      options={options}
    />
  );
};

export default table;
