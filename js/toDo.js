// Chceck off Specific Todos
$("ul").on("click", "li", function(){
 $(this).toggleClass("completed");
	});

//X to delete

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(function(){
		$(this).remove();
		});
 event.stopPropagation();
} );

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
	var todoText = $(this).val();
	$(this). val("");
	$("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + todoText + "</li>");

	}
});
