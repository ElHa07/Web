/*
$(document).ready(function(){
	alert("Bem-Vindos !");
})
$(window).on('load',function(){
	alert("Seja Bem-Vindos !");
})
$(function(){
	alert("Seja Bem-Vindo!");
})
*/

$(function() {
	/*
    var el = $('.box');
	
	el.html('<div class="test"> Meu Elemento!</div>');
	el.html('<h1 class="text1">Meu texto em javascript!</h1>');
	
	
	$('.box2').text("<div></div>");
	$('.box2').text("Olá Mundo!");
	
	$('input[type=button]').click(function(){
		var v = $('input[type=text]').var();
		var var2 = v.split("@");
	})
	$('.box').append('<h3>Meu elemento adicionado dinamicamente</h3>');
	*/
	
	
	$('.form_contato').submit(function(){
		
		var container = $('.container');
		var content = 'Nome:' + $('input[name=name]').val() + 
		'<hr>E-mail:'+ $('input[name=email]').val() +
		'<hr> Telefone:'
		+ $('input[name=telefone]').val();
		container.html(content);
		return false;
	})
});
