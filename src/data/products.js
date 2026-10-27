// DEMONSTRATIVO: nomes, descrições e opções são exemplos. Substitua por produtos reais. price só se cadastrado.
export const categories=['Buquês de rosas','Buquês variados','Arranjos florais','Flores em vasos','Cestas e presentes','Aniversários','Românticas','Coroas e homenagens'];
const d=(id,name,category,occasion)=>({id,name,category,occasion,image:'',price:null,demo:true,
 short:'Exemplo de produto. Descrição a ser cadastrada.',long:'Descrição completa a ser cadastrada pela loja.',options:['Opções a confirmar com a loja']});
export const products=[
 d(1,'Buquê de rosas (exemplo)','Buquês de rosas','namoro'),d(2,'Buquê variado (exemplo)','Buquês variados','aniversario'),
 d(3,'Arranjo floral (exemplo)','Arranjos florais','casamento'),d(4,'Flor em vaso (exemplo)','Flores em vasos','maes'),
 d(5,'Cesta de presente (exemplo)','Cestas e presentes','aniversario'),d(6,'Flores de aniversário (exemplo)','Aniversários','aniversario'),
 d(7,'Arranjo romântico (exemplo)','Românticas','namoro'),d(8,'Coroa de flores (exemplo)','Coroas e homenagens','homenagem')];
