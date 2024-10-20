
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); 
    var selectedOption = document.querySelector('input[name="options"]:checked').value;
    window.open(selectedOption, '_blank'); 
};
