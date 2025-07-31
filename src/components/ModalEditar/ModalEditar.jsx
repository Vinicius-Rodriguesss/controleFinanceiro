import { useState } from "react";
import styles from "./ModalEditar.module.css";

const ModalEditar = ({ gastoData, closeModal }) => {
  const [valorFormatado, setValorFormatado] = useState('');

  const formatarMoeda = (valor) => {
    const numero = Number(valor.replace(/\D/g, '')) / 100;
    return numero.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleValorChange = (e) => {
    const novoValor = formatarMoeda(e.target.value);
    setValorFormatado(novoValor);
  };

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  return (
    <div className={styles.areaModal}>
      <div className="container">
        <div className={`${styles.modal} p-5 bg-body rounded`}>
          <h2 className="fw-bold my-4">Editar Lista</h2>
          <form>
            <select required className="w-100">
              <option selected>{gastoData.quemGastou}</option>
              <option value="Vinicius Rodrigues">Vinicius Rodrigues</option>
              <option value="Ailton Rodrigues">Ailton Rodrigues</option>
              <option value="Vilma Quirino">Vilma Quirino</option>
            </select>

            <input type="text" required className="form-control py-2" placeholder={gastoData.descricao} />
            <input type="text" required className="form-control py-2" placeholder={gastoData.cartao} />

            <div className={styles.dataPagemento}>
              <select required className="w-100">
                <option selected>{gastoData.diaPagamento}</option>
                {Array.from({ length: 31 }, (_, index) => (
                  <option key={index + 1}>{index + 1}</option>
                ))}
              </select>

              <select required className="w-100">
                <option selected>{gastoData.mesPagamento}</option>
                {meses.map((mes, index) => (
                  <option key={index}>{mes}</option>
                ))}
              </select>
            </div>

            <input
              type="text"
              required
              className="form-control py-2"
              placeholder={gastoData.valor}
              value={valorFormatado}
              onChange={handleValorChange}
            />

            <div className={styles.areBtn}>
              <button type="submit" className={`btn btn-primary ${styles.btn}`}>Editar</button>
              <button type="button" onClick={closeModal} className={`btn btn-danger ${styles.btn}`}>Fechar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEditar;
