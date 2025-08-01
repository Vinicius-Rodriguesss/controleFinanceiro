import { useEffect, useState } from "react";
import Gastos from "../components/Gastos/Gastos"
import GastosMes from "../components/GastosMes/GastosMes"

const Home = () => {

  const [gastosData, setGastosData] = useState([]);

  useEffect(() => {
    const APIgastos = async () => {
      try {
        const response = await fetch('http://localhost:3000/gastos');
        const data = await response.json();
        setGastosData(data);
      } catch (error) {
        console.error('Erro ao buscar os gastos:', error);
      }
    };

    APIgastos();
  }, []);

  console.log(gastosData);


  return (
    <>
      <div className="container">
        <div className="d-flex flex-column gap-5 my-5">
          <div className="d-flex gap-3 flex-column flex-lg-row">
            <GastosMes gastosData={gastosData} /> 
          </div>

          <Gastos gastosData={gastosData} />
        </div>
      </div>
    </>
  )
}

export default Home