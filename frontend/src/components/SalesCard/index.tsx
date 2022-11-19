import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from "../NotificationButton";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const SalesCard = () => {
  useEffect(() => {
    axios.get(`${BASE_URL}/sales`).then((response) => {
      setSales(response.data.content);
    });
  }, []);

  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  const [sales, setSales] = useState<sale[]>([]);

  return (
    <>
      <div className="dsmeta-card">
        <h2 className="dsmeta-sales-title">Vendas</h2>
        <div>
          <div className="dsmeta-form-control-container">
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => {
                setMinDate(date);
              }}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="dsmeta-form-control-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => {
                date < minDate ? setMaxDate(minDate) : setMaxDate(date);
              }}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        <div>
          <table className="dsmeta-sales-table">
            <thead>
              <tr>
                <th className="show992">ID</th>
                <th className="show576">Data</th>
                <th>Vendedor</th>
                <th className="show992">Visitas</th>
                <th className="show992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sl) => {
                return (
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">08/07/2022</td>
                    <td>{sl.sellerName}</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SalesCard;
