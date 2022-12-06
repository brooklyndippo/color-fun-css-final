
class TickerTape extends HTMLElement {
    constructor() {
        super()
        const tempNode = template.content.cloneNode(true)
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(tempNode)
    }
    
}

customElements.define("ticker-tape", TickerTape);