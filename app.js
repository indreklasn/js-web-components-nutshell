class WebComponentButton extends HTMLElement {

  constructor() {
    super()
    this.addEventListener('click', () => {
      console.log('hi')
    })
  }

  // The connectedCallback() runs each time the element is added to the DOM
  connectedCallback() {
    this.style.border = 'solid 1px #333'
    this.style.padding = '10px 20px'
  }

  // Called every time the element is removed from the DOM. Useful for running clean up code.
  disconnectedCallback() {}

  // When the element is either removed from the DOM, or moved to a different page:
  adoptedCallback() {} 

}

window.customElements.define(
  'app-button', 
  WebComponentButton
);
