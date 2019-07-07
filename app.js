class WebComponentButton extends HTMLElement {

  get enabled() {
    console.log(val)
    return this.hasAttribute('enabled')
  }
  set enabled(val) {
    this.setAttribute('disabled');
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }
  set disabled(val) {
    console.log(val)
    this.setAttribute('disabled', '');
  }
  
  constructor() {
    super()
    this.addEventListener('click', () => {
      if (this.disabled) {
        return;
      }
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

  static get observedAttributes() {
    return ['disabled', 'enabled'];
  }


}

window.customElements.define(
  'app-button', 
  WebComponentButton
);
