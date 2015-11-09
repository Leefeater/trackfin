$(document).ready(function() {
	$("#add-btn").click(function() {
	dpd.category.post({"title":"foobar","completed":"foobar","price":"foobar"}, function(result, err) {
  if(err) return console.log(err);
  console.log(result, result.id);
});
});
});
