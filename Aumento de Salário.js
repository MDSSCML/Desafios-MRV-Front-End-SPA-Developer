A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

 
Salário	Percentual de Reajuste
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00

15%
12%
10%
7%
4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, que pode ser maior ou igual a zero, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.

 
Exemplo de Entrada	Exemplo de Saída
400.00

Novo salario: 460.00
Reajuste ganho: 60.00
Em percentual: 15 %

800.01

Novo salario: 880.01
Reajuste ganho: 80.00
Em percentual: 10 %

2000.00

Novo salario: 2140.00
Reajuste ganho: 140.00
Em percentual: 7 %



const salary = Number(gets());

let percent;

if (salary <= 400 ){
  
  percent = 15;
  
} else if ( salary >= 400.01 && salary <= 800) {
  
  percent = 12;
  
} else if ( salary >= 800.01 && salary <= 1200) {
  percent = 10;
  
} else if ( salary >= 1200.01 && salary <= 2000) {

  percent = 7;
  
} else{
  
  percent = 4;
}

const reajust = salary * (percent/100) ;
const newSalary = salary + reajust;
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");
