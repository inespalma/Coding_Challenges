function areaDodecaedro(a) {
  if (aresta < 0) {
    return "Por favor insira um valor positivo.";
  }

  // Fórmula para a área da superfície de um dodecaedro regular:
  // Área = 3 * √25 + 10√5 * (aresta²)
  const fator = Math.sqrt(25 + 10 * Math.sqrt(5));
  const area = 3 * fator * Math.pow(aresta, 2);

  // Retorna o resultado arredondado
  return Math.round(area);
}

console.log("Área da superfície do dodecaedro:", areaDodecaedro(2));
