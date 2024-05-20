import { expense } from "../data/data.js";


export class UI {
  constructor(){}
  
  barStatus(){
    let barstatus = document.querySelector('#barstatus');

    const maxAmount = Math.max(...expense.map(item => item.amount));
    
    expense.forEach((item) => {
      const amount = item.amount;
      const day = item.day;
     
      const container = document.createElement('div');
      container.classList.add('progress-bar-container');
      container.innerHTML = `
        <div class="progress-bar">
          <span></span>
        </div>
        <p class="bar-text">${day}</p>
        `       
      const progressBar = container.querySelector('.progress-bar');

      const percetange = (amount / maxAmount) * 100;
      progressBar.style.height = percetange * 100 / 65 + 'px';
      barstatus.appendChild(container);
    });

  }  
  
  printBars() {
  
    let ordern = expense.map((items) => items );
    ordern.sort((a, b) => a.amount < b.amount ? 1 : -1);
    
    const container = document.querySelectorAll('.progress-bar-container')
  
    container.forEach((item) => {
    if(item.lastElementChild.textContent.includes(ordern[0].day)){
        item.firstElementChild.style.backgroundColor = '#76b5bc';
    }else{
        item.firstElementChild.style.backgroundColor = '#ec775f';
    }

  })

  }

    
  printAmount(){

    const progressBar = document.querySelectorAll('.progress-bar');

    progressBar.forEach((bar, index) => {

      const amount = expense[index].amount;
      const divPrice = document.createElement('span');

      let day;
      
      bar.addEventListener('mouseenter', (e) => {
        
        day = bar.nextElementSibling.textContent;
        
        if(e.type === 'mouseenter' && day === 'wed'){
          bar.style.backgroundColor = '#76b5bcbd';
        }else {
          bar.style.backgroundColor = 'rgb(236, 119, 95, 0.75)';
        };
        

        divPrice.textContent = `$${amount}`;
        divPrice.classList.add('amount');
        bar.appendChild(divPrice);
      })
      
      bar.addEventListener('mouseleave', (e) => {
        divPrice.remove();
        
        if(e.type === 'mouseleave' && day === 'wed'){
          bar.style.backgroundColor = '#76b5bc';
        }else{
          bar.style.backgroundColor = '#ec775f';
        }

      })     
      
    })

  }

}