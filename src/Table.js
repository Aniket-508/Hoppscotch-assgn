import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./styles.css";

export default function Table() {
  const [tableData, setTableData] = useState([]);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!listening) {
      const events = new EventSource(
        "https://hopp-frontend-api.herokuapp.com/stream"
      );

      events.addEventListener("table", (e) => {
        const parsedTableData = JSON.parse(e.data);

        setTableData((table) => table.concat(parsedTableData));
      });

      setListening(true);
    }
  }, [listening, tableData]);

  return (
    <>
      <Navbar />
      <table className="stats-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer City</th>
            <th>Customer Purchase Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((ele, i) => (
            <tr key={i}>
              <td>{ele.table_data?.customer_name}</td>
              <td>{ele.table_data?.customer_email}</td>
              <td>{ele.table_data?.customer_city}</td>
              <td>{ele.table_data?.customer_purchase_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
