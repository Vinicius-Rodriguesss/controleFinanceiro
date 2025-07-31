import Gastos from "../components/Gastos/Gastos"
import GastosMes from "../components/GastosMes/GastosMes"

const Home = () => {

  const gastosData = [

  ];

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column gap-5 my-5">
          <div className="d-flex gap-3">
            <GastosMes gastosData={gastosData} />
          </div>

          <Gastos gastosData={gastosData} />
        </div>
      </div>
    </>
  )
}

export default Home