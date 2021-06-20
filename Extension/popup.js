document.getElementById("click").addEventListener('click', function(event){
    let comment = document.getElementById("fname").value
    axios.post('https://toxic-comment-detect-extension.herokuapp.com/predict', {
    Sentence: comment
  })


.then(function (response) {
    console.log(response);
    document.getElementById("output").innerText=response.data
  })
  .catch(function (error) {
    console.log(error);
    alert(error)
  })
});