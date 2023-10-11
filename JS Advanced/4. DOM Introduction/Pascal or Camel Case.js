function solve() {
    let input = document.getElementById('text').value;
    let currentCase = document.getElementById('naming-convention').value;
    input = input.toLowerCase();
    let arr = input.split(" ");
    let newArr = [];
    if (currentCase == 'Camel Case') {
      newArr.push(arr[0]);
      for (let i = 1; i < arr.length; i++) {
        let first = arr[i].slice(0, 1);
        first = first.toUpperCase();
        let word = first + arr[i].slice(1);
        newArr.push(word);
      }
    }
    else if (currentCase == 'Pascal Case') {
      for (let i = 0; i < arr.length; i++) {
        let first = arr[i].slice(0, 1);
        first = first.toUpperCase();
        let word = first + arr[i].slice(1);
        newArr.push(word);
      }
    }
    else {
      newArr.push('Error!');
    }
    document.getElementById('result').innerHTML = newArr.join("");
  }