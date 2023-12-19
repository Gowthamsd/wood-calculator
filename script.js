function calculate(operation, factor) {
    var length = parseFloat(document.getElementById('length').value);
    var count = parseFloat(document.getElementById('count').value);
    var price = parseFloat(document.getElementById('price').value);
  
    if (isNaN(length) || isNaN(count) || isNaN(price)) {
      alert('Please enter valid numbers for length, count, and price.');
      return;
    }
  
    var result1 = (length * count * factor) / 144 ;
    
    var result = (length * count * factor) / 144 * price;

    document.getElementById('result1').innerHTML = 'The total cubic feet is ' + result1.toFixed(2);  
    document.getElementById('result').innerHTML = 'The total amount is Rs. ' + result.toFixed(2);
  }
  
  function calculate1() {
    calculate('calculate1', 12);
  }
  
  function calculate2() {
    calculate('calculate2', 20);
  }
  function calculate3() {
    calculate('calculate2', 24);
  }
  function calculate4() {
    calculate('calculate2', 6);
  }
  function calculate5() {
    calculate('calculate2', 4.5);
  }
  function calculate6() {
    calculate('calculate2', 7.5);
  }
  function calculate7() {
    calculate('calculate2', 9);
  }
  function calculate8() {
    calculate('calculate2', 10.5);
  }
  function calculate9() {
    calculate('calculate2', 16);
  }
  function calculate10() {
    calculate('calculate2', 25);
  }
  function calculate11() {
    calculate('calculate2', 9);
  }
  function calculate12() {
    calculate('calculate2', 3);
  }
 
  