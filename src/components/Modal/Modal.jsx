import { useState } from "react";
import styles from "./Modal.module.css"
const Modal = (props) => {

  const [valor, setValor] = useState('');
  const formatarMoeda = (valor) => {
    const numero = Number(valor.replace(/\D/g, '')) / 100;
    return numero.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleChange = (e) => {
    const valorFormatado = formatarMoeda(e.target.value);
    setValor(valorFormatado);
  };

  const mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  return (
    <>
      <div className={`${styles.areaModal}`}>
        <div className="container">
          <div className={`${styles.modal} p-5 bg-body rounded`}>
            <h2 className="fw-bold my-4">Adicionar gastos</h2>
            <form>
              <select required className="w-100">
                <option selected>Quem gastou ?</option>
                <option value={"Vinicius Rodrigues"}>Vinicius Rodrigues</option>
                <option value={"Ailton Rodrigues"}>Ailton Rodrigues</option>
                <option value={"Vilma Quirino"}>Vilma Quirino</option>
              </select>
              <input type="text" required className="form-control py-2" placeholder="Oque você gastou ?" />
              <input type="text" required className="form-control py-2" placeholder="Em qual cartão você gastou ?" />
              <div className={`${styles.dataPagemento}`}>
                <select required className="w-100">
                  {
                    Array.from({ length: 31 }, (_, index) => (
                      <option key={index + 1}>{index + 1}</option>
                    ))
                  }
                </select>
                <select required className="w-100">
                  {
                    mes.map((mes, index) => (
                      <option key={index}>{mes}</option>
                    ))
                  }
                </select>
              </div>
              <input type="text" required className="form-control py-2" placeholder="R$ 0,00" value={valor} onChange={handleChange} />
              <div className={styles.areBtn}>
                <button className={`btn btn-primary ${styles.btn}`}>Adicionar</button>
                <button onClick={props.modal} className={`btn btn-danger ${styles.btn}`}>Fechar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal