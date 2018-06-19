 function func(){
  document.getElementById('testing').innerHTML = 'Downloading';  
  }

  var downloading = $('#testing');
  downloading.click(function(){
  	downloading.removeClass('btn-outline-info').addClass('btn-info');
  })