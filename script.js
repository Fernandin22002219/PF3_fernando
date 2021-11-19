const CALCULATE = document.getElementById('CALCULATE');

function fernando () {

  const NOME = document.getElementById('NOME').value
  const P = document.getElementById('P').value
  let I = document.getElementById('I').value
  const N = document.getElementById('N').value
  const RESULT = document.getElementById('RESULT');

  if(NOME !== '' && P !== '' && I !== '' && N !== ''){

    DECIMAL = ( I / 100 );
    const VF = ( P * ( ( ( 1 + DECIMAL ) ** N - 1) / DECIMAL ) ).toFixed(2);

    RESULT.textContent = `${NOME}, se você aplicar R$${P}, à taxa de juros de ${I}% ao mês, durante ${N} meses, acumulará uma poupança de R$${VF}`;

  }else{

    alert('Preencha todos os campos!')

  }  

}

CALCULATE.addEventListener('click', fernando);