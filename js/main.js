function change_select()
{
    var x = document.getElementById("tipo").value;
    var y = document.getElementById("sexo1");
    var z = document.getElementById("sexo2");
    var w = document.getElementById("rif");
    var t = document.getElementById("empresa");

	if( x == 'N')
	{
	    y.setAttribute('required','required');
		z.setAttribute('required','required');
		w.removeAttribute('required');
		t.removeAttribute('required');
	}

	if( x == 'J')
	{
		w.setAttribute('required','required');
		t.setAttribute('required','required');
		y.removeAttribute('required');
		z.removeAttribute('required');
	}

	if(x == "")
	{
		y.removeAttribute('required');
		z.removeAttribute('required');
		w.removeAttribute('required');
		t.removeAttribute('required');
	}
}

function comprobarClave(){ 
	var x = window.document.getElementById('confirm_password');
	var s = window.document.getElementById('aviso_pass');
   	var clave1 = document.getElementById("password").value;
   	var clave2 = document.getElementById("confirm_password").value;

   	if (clave1!=clave2)
   	{
   		x.style.border='2px solid red';
   		s.style.display="block";
   	}
   	else
   	{
   		x.style.border='none';
   		s.style.display="none";
   	}
}