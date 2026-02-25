/*
    Crie uma lista bidimensional com 3 linhas e 3 colunas,
    onde cada elemento seja uma matriz 3x3 com valores
    iniciando em 1 e aumentando em 1 a cada elemento.
*/

/*
let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas
*/

const lista3D = [
    [ // Linha 0.
        [ // Coluna 0 (uma matriz 3x3).
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],

        [ // Coluna 1 (uma matriz 3x3).
            [10, 11, 12],
            [13, 14, 15],
            [16, 17, 18]
        ],

        [ // Coluna 2 (uma matriz 3x3).
            [19, 20, 21],
            [22, 23, 24],
            [25, 26, 27]
        ],
    ],

    [ // Linha 1.
        [ // Coluna 0 (uma matriz 3x3).
            [28, 29, 30],
            [31, 32, 33],
            [34, 35, 36]
        ],

        [ // Coluna 1 (uma matriz 3x3).
            [37, 38, 39],
            [40, 41, 42],
            [43, 44, 45]
        ],

        [ // Coluna 2 (uma matriz 3x3).
            [46, 47, 48],
            [49, 50, 51],
            [52, 53, 54]
        ],
    ],

    [ // Linha 2.
        [ // Coluna 0 (uma matriz 3x3).
            [55, 56, 57],
            [58, 59, 60],
            [61, 62, 63]
        ],

        [ // Coluna 1 (uma matriz 3x3).
            [64, 65, 66],
            [67, 68, 69],
            [70, 71, 72]
        ],

        [ // Coluna 2 (uma matriz 3x3).
            [73, 74, 75],
            [76, 77, 78],
            [79, 80, 81]
        ],
    ]
];