function dados(id) {
	 
	/* var tabela = document.getElementById("tab");
	var celula = tabela.getElementsByTagName("td"); */

	if (id == 'aln01' || id == 'aln06') {
		
		document.getElementById("textPost").innerHTML = 'A nota de Ana está acima da média da turma. >>> 46 pontos.';
	}	else if (id == 'aln02' || id == 'aln07') {
		
			document.getElementById("textPost02").innerHTML = 'A nota de Eva está acima da média da turma. >>> 44 pontos.';
		}	else if (id == 'aln03' || id == 'aln08') {
		
				document.getElementById("textPost").innerHTML = 'A nota de Gil está abaixo da média da turma. >>> 43 pontos.';
			}	else if (id == 'aln04' || id == 'aln09') {
		
					document.getElementById("textPost02").innerHTML = 'A nota de Ise está abaixo da média da turma. >>> 40 pontos.';
				}	else if (id == 'aln05' || id == 'aln10') {
		
						document.getElementById("textPost").innerHTML = 'A nota de Ive está acima da média da turma. >>> 46 pontos.';
					}

	/*var tabela = document.getElementById("tab");
	var celula = tabela.getElementsByTagName("td");
	console.log(celula[14].firstChild.nodeValue);
	document.getElementById("textPost").innerHTML = 'A nota de Ise está abaixo da média da turma. >>> 40 pontos.';*/
}
function dados02() {
	document.getElementById("textPost").innerHTML = '';
	document.getElementById("textPost02").innerHTML = '';	
}