
class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		const card = this.ownerDocument.createElement('app-card');
		card.setAttribute('text_button', 'Cambiar background');
		card.setAttribute('description', 'holisssssss');
		this.shadowRoot?.appendChild(card);
	}
}

customElements.define('app-dashboard', Dashboard);