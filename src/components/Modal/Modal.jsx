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


  const [nome, setNome] = useState('');
  const [produto, setProduto] = useState('');
  const [cartao, setCartao] = useState('');
  const [dia, setDia] = useState('');
  const [mesSelecionado, setMesSelecionado] = useState('');



  const handleSubmit = async () => {

    const valorFormatado = parseFloat(
      valor.replace('R$', '').replace(/\./g, '').replace(',', '.').trim()
    );

    if (isNaN(valorFormatado)) {
      console.error('Valor inválido');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/gastos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          produto,
          cartao,
          dia,
          mes: mesSelecionado,
          valor: valorFormatado
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Gasto adicionado:', data);
        // limpar campos se quiser
      } else {
        console.error('Erro ao adicionar gasto');
      }
    } catch (err) {
      console.error('Erro:', err);
    }
  };

  return (
    <>
      <div className={`${styles.areaModal}`}>
        <div className="container">
          <div className={`${styles.modal} p-5 bg-body rounded`}>
            <h2 className="fw-bold my-4">Adicionar gastos</h2>
            <form>
              <select required className="w-100" value={nome} onChange={e => setNome(e.target.value)}>
                <option value="">Quem gastou ?</option>
                <option value="Vinicius Rodrigues">Vinicius Rodrigues</option>
                <option value="Ailton Rodrigues">Ailton Rodrigues</option>
                <option value="Vilma Quirino">Vilma Quirino</option>
              </select>

              <input
                type="text"
                required
                className="form-control py-2"
                placeholder="O que você gastou?"
                value={produto}
                onChange={e => setProduto(e.target.value)}
              />

              <input
                type="text"
                required
                className="form-control py-2"
                placeholder="Em qual cartão você gastou?"
                value={cartao}
                onChange={e => setCartao(e.target.value)}
              />

              <div className={`${styles.dataPagemento}`}>
                <select required className="w-100" value={dia} onChange={e => setDia(e.target.value)}>
                  <option selected>Dia</option>
                  {Array.from({ length: 31 }, (_, index) => (
                    <option key={index + 1}>{index + 1}</option>
                  ))}
                </select>

                <select required className="w-100" value={mesSelecionado} onChange={e => setMesSelecionado(e.target.value)}>
                  <option selected>Mes</option>
                  {mes.map((mes, index) => (
                    <option key={index}>{mes}</option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                required
                className="form-control py-2"
                placeholder="R$ 0,00"
                value={valor}
                onChange={handleChange}
              />

              <div className={styles.areBtn}>
                <button type="submit" onClick={handleSubmit} className={`btn btn-primary ${styles.btn}`}>Adicionar</button>
                <button type="button" onClick={props.modal} className={`btn btn-danger ${styles.btn}`}>Fechar</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal