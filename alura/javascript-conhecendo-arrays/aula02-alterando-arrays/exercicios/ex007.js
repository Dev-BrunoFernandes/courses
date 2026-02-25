/*
    Adicione um novo elemento (por exemplo, 15)
    na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
*/
const lista3D = [
    [ // Linha 0.
        [[1, 2, 3], [4, 5, 6], [7, 8, 9]], // Coluna 0 (uma matriz 3x3).
        [[10, 11, 12], [13, 14, 15], [16, 17, 18]], // Coluna 1 (uma matriz 3x3).
        [[19, 20, 21], [22, 23, 24], [25, 26, 27]], // Coluna 2 (uma matriz 3x3).
    ],
    [ // Linha 1.
        [[28, 29, 30], [31, 32, 33], [34, 35, 36]], // Coluna 0 (uma matriz 3x3).
        [[37, 38, 39], [40, 41, 42], [43, 44, 45]], // Coluna 1 (uma matriz 3x3).
        [[46, 47, 48], [49, 50, 51], [52, 53, 54]], // Coluna 2 (uma matriz 3x3).
    ],
    [ // Linha 2.
        [[55, 56, 57], [58, 59, 60], [61, 62, 63]], // Coluna 0 (uma matriz 3x3).
        [[64, 65, 66], [67, 68, 69], [70, 71, 72]], // Coluna 1 (uma matriz 3x3).
        [[73, 74, 75], [76, 77, 78], [79, 80, 81]], // Coluna 2 (uma matriz 3x3).
    ]
];

lista3D[2][1] = 15;

console.log(lista3D);