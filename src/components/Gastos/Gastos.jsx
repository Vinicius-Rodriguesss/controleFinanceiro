import { useState } from 'react';
import styles from "./Gastos.module.css";
import ModalEditar from '../ModalEditar/ModalEditar';
import Trash from '../Trash/Trash';

const Gastos = ({ gastosData }) => {
  const [isModalAberto, setIsModalAberto] = useState(false);
  const [linhaExpandida, setLinhaExpandida] = useState(null);
  const [gastoSelecionado, setGastoSelecionado] = useState(null);

  const toggleLinhaExpandida = (id) => {
    setLinhaExpandida(linhaExpandida === id ? null : id);
  };

  const abrirModalEdicao = (gasto) => {
    setGastoSelecionado(gasto);
    setIsModalAberto(true);
  };

  const fecharModal = () => setIsModalAberto(false);

  return (
    <>
      {/* Tabela (Desktop) */}
      <table className={styles.desktopTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Quem Gastou</th>
            <th>Descrição</th>
            <th>Cartão</th>
            <th>Pagamento</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {gastosData.map((gasto) => (
            <tr key={gasto.id}>
              <td>{gasto.id}</td>
              <td>{gasto.quemGastou}</td>
              <td>{gasto.descricao}</td>
              <td>{gasto.cartao}</td>
              <td>{gasto.diaPagamento} {gasto.mesPagamento}</td>
              <td>R$ {gasto.valor.toFixed(2)}</td>
              <td className="d-flex gap-2">
                <button onClick={() => abrirModalEdicao(gasto)} className={styles.btn}>
                  Editar
                </button>
                <Trash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cards (Mobile) */}
      <div className={styles.mobileCards}>
        {gastosData.map((gasto) => (
          <div key={gasto.id} className={styles.card}>
            <div className={styles.cardHeader} onClick={() => toggleLinhaExpandida(gasto.id)}>
              <div>
                <strong>{gasto.descricao}</strong> - R$ {gasto.valor.toFixed(2)}
              </div>
              <div>{linhaExpandida === gasto.id ? '▲' : '▼'}</div>
            </div>

            {linhaExpandida === gasto.id && (
              <div className={styles.cardBody}>
                <p><strong>ID:</strong> {gasto.id}</p>
                <p><strong>Quem gastou:</strong> {gasto.quemGastou}</p>
                <p><strong>Cartão:</strong> {gasto.cartao}</p>
                <p><strong>Pagamento:</strong> {gasto.diaPagamento} {gasto.mesPagamento}</p>
                <p><strong>Categoria:</strong> {gasto.categoria}</p>
                <div className={styles.actions}>
                  <button onClick={() => abrirModalEdicao(gasto)} className={styles.btn}>Editar</button>
                  <Trash />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalAberto && (
        <ModalEditar
          closeModal={fecharModal}
          gastoData={gastoSelecionado}
          gastosData={gastosData}
        />
      )}
    </>
  );
};

export default Gastos;
