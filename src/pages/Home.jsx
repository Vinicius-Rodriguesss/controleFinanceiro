import Gastos from "../components/Gastos/Gastos"
import GastosMes from "../components/GastosMes/GastosMes"

const Home = () => {

  const gastosData = [
    {
      id: 1,
      quemGastou: "Lorem",
      descricao: "Lorem",
      cartao: "Cartão Lorem",
      diaPagamento: 30,
      mesPagamento: "Janeiro",
      valor: 250.00,
    },
     {
      id: 2,
      quemGastou: "Lorem",
      descricao: "Lorem",
      cartao: "Cartão Lorem",
      diaPagamento: 30,
      mesPagamento: "Janeiro",
      valor: 250.00,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column gap-5 my-5">
          <GastosMes gastosData={gastosData} />
          <Gastos gastosData={gastosData} />
        </div>
      </div>
    </>
  )
}

export default Home