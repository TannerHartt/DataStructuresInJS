import './style.css';
import javascriptLogo from './public/javascript.svg';
import DoublyLinkedList from './DoublyLinkedLists/doubly';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Linked Lists Demo</h1>
    
    <p class="read-the-docs">
      Click on either of the logos to learn more
    </p> 
    <p class="read-the-docs">
      This app is designed to test the functionality of linked lists and operations on them.
    </p>
  </div>
`;