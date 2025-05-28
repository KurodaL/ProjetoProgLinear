document.getElementById('otimizacao-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const coefX = parseFloat(document.getElementById('coefX').value);
    const coefY = parseFloat(document.getElementById('coefY').value);
  
    const model = {
      optimize: "lucro",
      opType: "max",
      constraints: {},
      variables: {
        X: { lucro: coefX },
        Y: { lucro: coefY }
      }
    };
  
    model.constraints = {
      restr1: { max: 10 },
      restr2: { min: 5 },
      restr3: { max: 8 },
      restr4: { max: 15 },
      restr5: { min: 3 }
    };
  
    const resultado = solver.Solve(model);
  
    document.getElementById('resultado').textContent = JSON.stringify(resultado, null, 2);
  });
  