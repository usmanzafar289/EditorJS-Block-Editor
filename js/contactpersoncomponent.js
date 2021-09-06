/*//operation with editor'js.
mods to paragraph to allow custom editing of sections
clicking on an internal field choiceetc, will highlight it, show the menu.
clicking on a content editable will highlight it, no menu


*/
class contactPerson extends HTMLElement {
	 _placeholder;

    constructor() {

        super();
        if (this.innerHTML.trim() === "") {
            this._placeholder = "Contact Person";
           // this.innerHTML = this._placeholder;
        }
        else {

            this._placeholder = this.innerHTML;
        }
		var greaterThanSign = "&#62;";
		    // Attaches a shadow root to our custom element.
		//const shadowRoot = this.attachShadow({mode: 'open'});
		/* this.isRequired = this.hasAttribute('required');
		this.defaultValue = this.getAttribute('default');
		// Defines the "real" input element.
		this.spanElement = document.createElement('span');
		let inputElement = document.createElement('input');
		
		
		this.appendChild(inputElement);
        this.appendChild(this.spanElement); */
		let collapsibleBtn =  document.createElement('button');
		collapsibleBtn.classList.add('collapsible');
		collapsibleBtn.innerHTML = this._placeholder;
	
		let spanElement = document.createElement('span');
		spanElement.classList.add('close');
		collapsibleBtn.appendChild(spanElement);
		collapsibleBtn.appendChild(spanElement);
		spanElement.innerHTML = greaterThanSign;
		let paragraph = document.createElement('p');
		paragraph.innerHTML = "Testing message";

		let collapsableDiv = document.createElement('div');
		collapsableDiv.classList.add('collapsible_container');
		collapsableDiv.setAttribute('id','collapsible_container');
		collapsableDiv.style.display = 'none';
		
        this.appendChild(collapsibleBtn);
	    this.appendChild(collapsableDiv);
		collapsableDiv.appendChild(paragraph);
		this.collapseMe(collapsibleBtn);
		/* inputElement.addEventListener('focus', () => {
		  console.log('focus on created input');
		});
		this.addEventListener('click', function () {
			this.updateValue(this,inputElement);
        });
		this.addEventListener("keyup", function(){
			this.updateValue(this,inputElement);
		});
        this.addEventListener("paste", function(){
			this.updateValue(this,inputElement);
		});
        this.addEventListener("copy", function(){
			this.updateValue(this,inputElement);
		});
        this.addEventListener("cut", function(){
			this.updateValue(this,inputElement);
		});
        this.addEventListener("delete", function(){
			this.updateValue(this,inputElement);
		});
        this.addEventListener("mouseup", function(){
			this.updateValue(this,inputElement);
		});
        this.addEventListener("input", function(){
			this.updateValue(this,inputElement);
		});
        this.addEventListener("change", function(){
			this.updateValue(this,inputElement);
		}); 
        this.addEventListener("focus", function () {
        	this.updateValue(this,inputElement);
        }); */
    }
	collapseMe(collapsibleBtn){
		var coll = collapsibleBtn.classList;
		collapsibleBtn.addEventListener("click", function() {
			if(this.children[0].className == "close"){
				this.children[0].classList.remove('close');
				this.children[0].classList.add('open');
			}else{
				this.children[0].classList.remove('open');
				this.children[0].classList.add('close');
			}
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.display === "block") {
			  content.style.display = "none";
			} else {
			  content.style.display = "block";
			}
		  });
	}
	updateValue(ele,inputElement){
		/* inputElement.setAttribute('value', inputElement.value);
		ele.innerHTML = inputElement.value;
		if(this.isRequired == true){
			this.validate(ele,inputElement);
		} */
	}
	validate(ele,inputElement){
		/* var mNumberErrorMsgs = templateAllMsgs['contact-person'];
		this.spanElement.innerHTML = '';
		this.spanElement.style.color = 'initial';
		ele.removeAttribute("has-error")
		inputElement.style.border = 'initial';
		if(inputElement.value == ""){
			ele.setAttribute("has-error",true);
			inputElement.style.border = '1px solid red';
			this.spanElement.style.color = 'red';
			this.spanElement.innerHTML = mNumberErrorMsgs['error'];
		}else if(this.minVal > inputElement.value){
			ele.setAttribute("has-error",true);
			inputElement.style.border = '1px solid red';
			this.spanElement.style.color = 'red';
			this.spanElement.innerHTML = mNumberErrorMsgs['minimum_value_error'].replace("{min_val}" , this.minVal);
		}else if(this.maxVal < inputElement.value){
			ele.setAttribute("has-error",true);
			inputElement.style.border = '1px solid red';
			this.spanElement.style.color = 'red';
			this.spanElement.innerHTML = mNumberErrorMsgs['maximum_value_error'].replace("{max_val}" , this.maxVal);
		}else{
			ele.setAttribute("has-error",false);
			inputElement.style.border = 'initial';
			this.spanElement.innerHTML = '';
			this.spanElement.style.color = 'initial';
		} */
	}
    rawvalue() {
        if (this.innerHTML == this._placeholder)
            return "";
        else
            return this.innerHTML;
    } 
}
window.customElements.define('contact-person', contactPerson);