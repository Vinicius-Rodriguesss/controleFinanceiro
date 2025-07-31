import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./GastosMes.module.css";

const GastosMes = (props) => {
  const dataAtual = new Date();
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const mesAtual = meses[dataAtual.getMonth()];

  let totalGastos = 0;
  for (let i = 0; i < props.gastosData.length; i++) {
    totalGastos += parseFloat(props.gastosData[i].valor);
  }

  const totalFormatado = totalGastos.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <div className="card w-100 py-4 px-5 bg-light border-secondary-subtle">
        <div className="row align-items-center">
          <div className="col-lg-8 col-12 text-lg-start text-center my-2">
            <h2 className={styles.titlePrice}>{totalFormatado}</h2>
            <span>{`Gasto do mês - ${mesAtual}`}</span>
          </div>

          <div className="col-lg-4 col-12 my-3 d-flex justify-content-lg-end justify-content-center">
            <button onClick={toggleModal} className="btn py-2 px-4 btn-primary">Adicionar gasto</button>
          </div>
        </div>
      </div>


      {modal && <Modal modal={toggleModal} />}

    </>
  )
}

export default GastosMes