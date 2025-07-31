import Gastos from "../components/Gastos/Gastos"
import GastosMes from "../components/GastosMes/GastosMes"

const Home = () => {

  const gastosData = [
    {
      id: 1,
      quemGastou: "FDSGHFGDSHFKJ",
      descricao: "teste1",
      cartao: "Cartão Lorem",
      diaPagamento: 2,
      mesPagamento: "agosto",
      valor: 10000.00,
    },
     {
      id: 2,
      quemGastou: "Cleber",
      descricao: "tete2",
      cartao: "Cartão Lorem",
      diaPagamento: 30,
      mesPagamento: "novembro",
      valor: 23251.80,
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