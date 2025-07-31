import { useState } from 'react';
import styles from "./Gastos.module.css";
import ModalEditar from '../ModalEditar/ModalEditar';
import Trash from '../Trash/Trash';

const Gastos = (props) => {

let gastosData = props.gastosData;

 const [modal, setModal] = useState(false);
 const toggleModal = () => setModal(!modal);

 const [expandedRow, setExpandedRow] = useState(null);

 const toggleRow = (id) => {
  setExpandedRow(expandedRow === id ? null : id);
 };


 

 return (
  <>
   {/* Tabela para desktop */}
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
       <td className='d-flex gap-2'>
        <button onClick={toggleModal} className={styles.btn}>
         Editar
        </button>

        <Trash />

       </td>
      </tr>
     ))}
    </tbody>
   </table>

   {/* Cards para mobile */}
   <div className={styles.mobileCards}>
    {gastosData.map((gasto) => (
     <div key={gasto.id} className={styles.card}>
      <div
       className={styles.cardHeader}
       onClick={() => toggleRow(gasto.id)}
      >
       <div>
        <strong>{gasto.descricao}</strong> - R$ {gasto.valor.toFixed(2)}
       </div>
       <div>
        {expandedRow === gasto.id ? '▲' : '▼'}
       </div>
      </div>

      {expandedRow === gasto.id && (
       <div className={styles.cardBody}>
        <p><strong>ID:</strong> {gasto.id}</p>
        <p><strong>Quem gastou:</strong> {gasto.quemGastou}</p>
        <p><strong>Cartão:</strong> {gasto.cartao}</p>
        <p><strong>Pagamento:</strong> {gasto.diaPagamento} {gasto.mesPagamento}</p>
        <p><strong>Categoria:</strong> {gasto.categoria}</p>
        <div className={`${styles.actions}`}>
         <button onClick={toggleModal} className={styles.btn}>
          Editar
         </button>
         <Trash />
        </div>
       </div>
      )}
     </div>
    ))}
   </div>

   {modal && <ModalEditar modal={toggleModal} gastosData={gastosData} />}

  </>
 );
};

export default Gastos;