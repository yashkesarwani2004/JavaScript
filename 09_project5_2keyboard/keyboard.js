// console.log('Project 5');

const insert = document.querySelector("#insert")
//niche vali line me pure window ko select kar liya hai
window.addEventListener('keydown', (e) => {
  //niche innerhtml jo likha hai vo ek table bana dega jisme tr me jo hai vo uper rahega row me fir niche vale me
  insert.innerHTML = `
  <div class='color'> 
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
})

