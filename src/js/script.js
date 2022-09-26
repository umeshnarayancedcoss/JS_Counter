// function for increment value
function incrementValue()
{
    var value = document.getElementById('number').value;
    if(value>=1){
        value++;
            document.getElementById('number').value=value;
    }
}
// function for decrement value
function decrementValue()
{
    var value = document.getElementById('number').value;
    if(value>1){
        value--;
            document.getElementById('number').value=value;
    }
}
