document.getElementById('otimizacao-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const coefX = parseFloat(document.getElementById('coefX').value);
    const coefY = parseFloat(document.getElementById('coefY').value);
  
    // Modelo base
    const model = {
      optimize: "lucro",
      opType: "max",
      constraints: {},
      variables: {
        X: { lucro: coefX },
        Y: { lucro: coefY }
      }
    };
  
    // Exemplo fixo de restrições:
    model.constraints = {
      restr1: { max: 10 },
      restr2: { min: 5 },
      restr3: { max: 8 },
      restr4: { max: 15 },
      restr5: { min: 3 }
    };
  
    // Coloque também as variáveis nas restrições (ajustaremos se quiser parser dinâmico).
  
    const resultado = solver.Solve(model);
  
    document.getElementById('resultado').textContent = JSON.stringify(resultado, null, 2);
  });
  