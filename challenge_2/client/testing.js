var textBoxData = $('.dataSubmission').val();

var onButtonSubmit = function() {
  $.ajax({
    method: "POST",
    url: '/',
    data: JSON.parse(textBoxData),
    success: function(data) {
      console.log('here is the data', data);
    },
    error: function(error) {
      console.log('the error is', error);
          }
  });
}