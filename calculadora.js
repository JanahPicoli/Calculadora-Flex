
/*quando declaramos variaveis fora das funções elas são consideradas GLOBAIS  e podem ser utilizadas por todas as funções que forem criadas*/
var etanol, gasolina;

function calcular(){
    etanol = parseFloat(formularioFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(formularioFlex.txtGasolina.value.replace(",","."));
if(etanol < 0.7 * gasolina){
document.getElementById("status").src="etanol.png";

}else{
    document.getElementById("status").src="gasolina.png";

}
}
function resetar(){
    document.getElementById("status").src="neutro.png";
}

