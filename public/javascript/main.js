const select = document.querySelector('select');

select.addEventListener('change', async () => {
  const method = select.value;
  if (method == 1) {
    const response = await fetch("/optimal/greedy", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    let answer = '';
    for (let index = 0; index < result.length; index++) {
      const element = result[index];
      answer += `${element.symbol}\r\n`
    }
    const textarea = document.querySelector('textarea');
    textarea.value = answer
  }
  else if (method == 2) {
    const response = await fetch("/optimal/dynamic", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    let answer = '';
    for (let index = 0; index < result.length; index++) {
      const element = result[index];
      answer += `${element.symbol}\r\n`
    }
    const textarea = document.querySelector('textarea');
    textarea.value = answer
  }
  else if (method == 3) {
    let answer = 'backtracking';
    // for (let index = 0; index < result.length; index++) {
    //   const element = result[index];
    //   answer += `${element.symbol}\r\n`
    // }
    const textarea = document.querySelector('textarea');
    textarea.value = answer
  }
})