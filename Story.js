const currentDocument = document.currentScript.ownerDocument;

class Story extends HTMLElement {
	constructor() {
		super();

		this.addEventListener("click", e => {
			this.toggleCard();
		});
	}

	toggleCard() {
		console.log("Element was clicked!");
	}
}

customElements.define("story", Story);
