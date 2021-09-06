/*//operation with editor'js.
mods to paragraph to allow custom editing of sections
clicking on an internal field choiceetc, will highlight it, show the menu.
clicking on a content editable will highlight it, no menu


*/

function msel_clicked(msel) {
	
    if (msel.getAttribute('data-showing') == 'true') {
        console.log('showed');
        return;
    }
    msel.setAttribute('data-showing', 'true');
    var attr = msel.getAttribute('choices');
    var attrs = attr.split("|");

    var myOptions = [];
    var i = 0;
    for (const opt of attrs) {
        // set option text for the VirtualSelect dropdown component
        myOptions[i] = { label: opt, value: opt };
        i = i + 1;
    }
    msel.style.display = 'inline-block';  // undo what we did in afterclose
    var placeholder = msel._placeholder;
    var selectedvalue;
    if (msel.innerHTML != placeholder)
        selectedvalue = msel.innerHTML;
    else
        selectedvalue = this._placeholder;
    if (msel.hasAttribute('multiple')) {
        VirtualSelect.init({
            placeholder: placeholder,
            multiple: "",
            ele: '#' + msel.id,
            options: myOptions,
            allowNewOption: false,
            showDropboxAsPopup: true,
            selectedValue: selectedvalue

        });
    }
    else
        VirtualSelect.init({
            placeholder: placeholder,
            ele: '#' + msel.id,
            options: myOptions,
            allowNewOption: false,
            showDropboxAsPopup: true,
            selectedValue: selectedvalue
        });


    msel.addEventListener('afterClose', function () {
        // reset display to original
        msel.innerHTML = msel.getDisplayValue();
		if(msel.innerHTML != ""){
			msel.setAttribute('data-showing', 'false');
			msel.setAttribute('data-hasdata', 'true');
			this.style.backgroundColor = 'white';

			//reset width
			msel.style.display = 'inline';
			console.log('not showed');
			msel.dispatchEvent(new Event("change")); //change event to trigger other controls
		}else{
			 msel.setAttribute('data-showing', 'false');
			 msel.setAttribute('data-hasdata', 'true');
			 this.style.backgroundColor = 'lightgray';
			 this.style.display = 'initial';
			 msel.innerHTML = this._placeholder;
			 msel.dispatchEvent(new Event("change")); //change event to trigger other controls
		//	this._placeholder
		}
    });
}
function choose_person(msel) {
   if (msel.getAttribute('data-showing') == 'true') {
        console.log('showed');
        return;
    }
    msel.setAttribute('data-showing', 'true');
    var personData = JSON.parse(msel.getAttribute('json-data'));
	var myOptions = [];
    var i = 0;
	var selectedOption = 0;
	if(personData.length > 0){
		var displayFormat = msel.getAttribute('displayformat');
		displayFormat = typeof displayFormat != "undefined" && displayFormat != "undefined" ? displayFormat : "";
		var displayFormatArr = [];
		var displayNameAndAddress = false;
		var displayName = false;
		var displayAddress = false;
		if(displayFormat != ""){
			displayFormatArr = displayFormat.split(",");
			if(displayFormatArr.length > 0){
				for(var f=0;f<displayFormatArr.length;f++){
					if(displayFormatArr[f] == "name"){
						displayName = true;
					}
					if(displayFormatArr[f] == "address"){
						displayAddress = true;
					}
				}
				if(displayName == true && displayAddress == true){
					displayNameAndAddress = true;
				}
			}
		}
		for(var p=0;p<personData.length; p++){
			
			var label = "";
			 if(displayNameAndAddress == true){
				label = personData[p]['name'] +' , '+personData[p]['address'];
			 }else if(displayAddress == true){
				label = personData[p]['address'];
			 }else{
				label = personData[p]['name'];
			 }
			 
			 myOptions[p] = { label: label, value: personData[p]['id'] };
		}
	}
     
    msel.style.display = 'inline-block';  // undo what we did in afterclose
    var placeholder = msel._placeholder;
    var selectedvalue;
	//debugger
    if (msel.innerHTML != placeholder)
        selectedvalue = msel.innerHTML;
    else
        selectedvalue = this._placeholder;
        VirtualSelect.init({
            placeholder: placeholder,
            ele: '#' + msel.id,
            options: myOptions,
            allowNewOption: false,
            showDropboxAsPopup: true,
            selectedValue: selectedOption
        });


    msel.addEventListener('afterClose', function () {
        // reset display to original
        msel.innerHTML = msel.getDisplayValue();
		if(msel.innerHTML != ""){
			msel.setAttribute('data-showing', 'false');
			msel.setAttribute('data-hasdata', 'true');
			this.style.backgroundColor = 'white';

			//reset width
			msel.style.display = 'inline';
			console.log('not showed');
			msel.dispatchEvent(new Event("change")); //change event to trigger other controls
		}else{
			 msel.setAttribute('data-showing', 'false');
			 msel.setAttribute('data-hasdata', 'true');
			 this.style.backgroundColor = 'lightgray';
			 this.style.display = 'initial';
			 msel.innerHTML = this._placeholder;
			 msel.dispatchEvent(new Event("change")); //change event to trigger other controls
		//	this._placeholder
		}
    });
}
function choose_vehicle(msel) {
   if (msel.getAttribute('data-showing') == 'true') {
        console.log('showed');
        return;
    }
    msel.setAttribute('data-showing', 'true');
    var vehicleData = JSON.parse(msel.getAttribute('json-data'));
	var myOptions = [];
    var i = 0;
	var selectedOption = 0;
	if(vehicleData.length > 0){
		var displayFormat = msel.getAttribute('displayformat');
		displayFormat = typeof displayFormat != "undefined" && displayFormat != "undefined" ? displayFormat : "";
		var displayFormatArr = [];
		var displayNameAndAddress = false;
		var displayName = false;
		var displayAddress = false;
		if(displayFormat != ""){
			displayFormatArr = displayFormat.split(",");
			if(displayFormatArr.length > 0){
				for(var f=0;f<displayFormatArr.length;f++){
					if(displayFormatArr[f] == "name"){
						displayName = true;
					}
					if(displayFormatArr[f] == "address"){
						displayAddress = true;
					}
				}
				if(displayName == true && displayAddress == true){
					displayNameAndAddress = true;
				}
			}
		}
	
		for(var p=0;p<vehicleData.length; p++){
			var label = "";
			 if(displayNameAndAddress == true){
				label = vehicleData[p]['name'] +' , '+vehicleData[p]['address'];
			 }else if(displayAddress == true){
				label = vehicleData[p]['address'];
			 }else{
				label = vehicleData[p]['name'];
			 }
			myOptions[p] = { label: label, value: vehicleData[p]['id']};
		}
	}

     
    msel.style.display = 'inline-block';  // undo what we did in afterclose
    var placeholder = msel._placeholder;
    var selectedvalue;
    if (msel.innerHTML != placeholder)
        selectedvalue = msel.innerHTML;
    else
        selectedvalue = this._placeholder;
        VirtualSelect.init({
            placeholder: placeholder,
            ele: '#' + msel.id,
            options: myOptions,
            allowNewOption: false,
            showDropboxAsPopup: true,
            selectedValue: selectedOption
        });


    msel.addEventListener('afterClose', function () {
        // reset display to original
        msel.innerHTML = msel.getDisplayValue();
		if(msel.innerHTML != ""){
			msel.setAttribute('data-showing', 'false');
			msel.setAttribute('data-hasdata', 'true');
			this.style.backgroundColor = 'white';

			//reset width
			msel.style.display = 'inline';
			console.log('not showed');
			msel.dispatchEvent(new Event("change")); //change event to trigger other controls
		}else{
			 msel.setAttribute('data-showing', 'false');
			 msel.setAttribute('data-hasdata', 'true');
			 this.style.backgroundColor = 'lightgray';
			 this.style.display = 'initial';
			 msel.innerHTML = this._placeholder;
			 msel.dispatchEvent(new Event("change")); //change event to trigger other controls
		//	this._placeholder
		}
    });
}
function choose_officer(msel) {
   if (msel.getAttribute('data-showing') == 'true') {
        console.log('showed');
        return;
    }
    msel.setAttribute('data-showing', 'true');
    var officerData = JSON.parse(msel.getAttribute('json-data'));
	var myOptions = [];
    var i = 0;
	var selectedOption = 0;
	if(officerData.length > 0){
		var displayFormat = msel.getAttribute('displayformat');
		displayFormat = typeof displayFormat != "undefined" && displayFormat != "undefined" ? displayFormat : "";
		var displayFormatArr = [];
		var displayNameAndAddress = false;
		var displayName = false;
		var displayAddress = false;
		if(displayFormat != ""){
			displayFormatArr = displayFormat.split(",");
			if(displayFormatArr.length > 0){
				for(var f=0;f<displayFormatArr.length;f++){
					if(displayFormatArr[f] == "name"){
						displayName = true;
					}
					if(displayFormatArr[f] == "address"){
						displayAddress = true;
					}
				}
				if(displayName == true && displayAddress == true){
					displayNameAndAddress = true;
				}
			}
		}
		for(var p=0;p<officerData.length; p++){
			
			var label = "";
			 if(displayNameAndAddress == true){
				label = officerData[p]['name'] +' , '+officerData[p]['address'];
			 }else if(displayAddress == true){
				label = officerData[p]['address'];
			 }else{
				label = officerData[p]['name'];
			 }
			 
			 myOptions[p] = { label: label, value: officerData[p]['id'] };
		}
	}

     
    msel.style.display = 'inline-block';  // undo what we did in afterclose
    var placeholder = msel._placeholder;
    var selectedvalue;
	//debugger
    if (msel.innerHTML != placeholder)
        selectedvalue = msel.innerHTML;
    else
        selectedvalue = this._placeholder;
        VirtualSelect.init({
            placeholder: placeholder,
            ele: '#' + msel.id,
            options: myOptions,
            allowNewOption: false,
            showDropboxAsPopup: true,
            selectedValue: selectedOption
        });


    msel.addEventListener('afterClose', function () {
        // reset display to original
        msel.innerHTML = msel.getDisplayValue();
		if(msel.innerHTML != ""){
			msel.setAttribute('data-showing', 'false');
			msel.setAttribute('data-hasdata', 'true');
			this.style.backgroundColor = 'white';

			//reset width
			msel.style.display = 'inline';
			console.log('not showed');
			msel.dispatchEvent(new Event("change")); //change event to trigger other controls
		}else{
			 msel.setAttribute('data-showing', 'false');
			 msel.setAttribute('data-hasdata', 'true');
			 this.style.backgroundColor = 'lightgray';
			 this.style.display = 'initial';
			 msel.innerHTML = this._placeholder;
			 msel.dispatchEvent(new Event("change")); //change event to trigger other controls
		//	this._placeholder
		}
    });
}
function choose_location(msel) {
   if (msel.getAttribute('data-showing') == 'true') {
        console.log('showed');
        return;
    }
    msel.setAttribute('data-showing', 'true');
    var locationData = JSON.parse(msel.getAttribute('json-data'));
	var myOptions = [];
    var i = 0;
	var selectedOption = 0;
	if(locationData.length > 0){
		for(var p=0;p<locationData.length; p++){
			if(msel.innerHTML == locationData[p]['location']){
			 selectedOption = locationData[p]['id'];
			}
			 myOptions[p] = { label: locationData[p]['location'], value: locationData[p]['id'] };
		}
	}

     
    msel.style.display = 'inline-block';  // undo what we did in afterclose
    var placeholder = msel._placeholder;
    var selectedvalue;
	//debugger
    if (msel.innerHTML != placeholder)
        selectedvalue = msel.innerHTML;
    else
        selectedvalue = this._placeholder;
        VirtualSelect.init({
            placeholder: placeholder,
            ele: '#' + msel.id,
            options: myOptions,
            allowNewOption: false,
            showDropboxAsPopup: true,
            selectedValue: selectedOption
        });


    msel.addEventListener('afterClose', function () {
        // reset display to original
        msel.innerHTML = msel.getDisplayValue();
		if(msel.innerHTML != ""){
			msel.setAttribute('data-showing', 'false');
			msel.setAttribute('data-hasdata', 'true');
			this.style.backgroundColor = 'white';

			//reset width
			msel.style.display = 'inline';
			console.log('not showed');
			msel.dispatchEvent(new Event("change")); //change event to trigger other controls
		}else{
			 msel.setAttribute('data-showing', 'false');
			 msel.setAttribute('data-hasdata', 'true');
			 this.style.backgroundColor = 'lightgray';
			 this.style.display = 'initial';
			 msel.innerHTML = this._placeholder;
			 msel.dispatchEvent(new Event("change")); //change event to trigger other controls
		//	this._placeholder
		}
    });
}
//do nothing if text edit enabled and showing the text normal mode
function hidespan(img) {

    event.stopPropagation();
    var contnr = img.parentNode;
    hidespan2(contnr);
}

function hidespan2(deleteable) {
    console.log('hidespan');
    console.log(deleteable.id);

    try {
        deleteable.style.textDecoration = 'line-through';
        deleteable.style.color = "gray";
        deleteable.style.backgroundcolor = "lightgray";
    } catch { }
    deleteable.setAttribute('data-hidden', 'true');
   // var children = deleteable.childNodes;

    deleteable.querySelectorAll('i').forEach(ele => {
        ele.style.display='none';
    });

	deleteable.querySelectorAll('free-text').forEach(ele => {
		try {
			ele.setAttribute['contenteditable'] = false;
			//deletable.querySelectorAll('free-text')[0].setAttribute['contenteditable'] = false
			ele.style.textDecoration = 'none';
			ele.contentEditable = false;
			if (ele.contentEditable == true || ele.contentEditable == "true")
				ele.style.color = "blue";
			else
				ele.style.color = "black";
		} catch {}
		});
    deleteable.querySelectorAll('span m-text deletable-span m-select free-text').forEach(ele => {
        ele.style.textDecoration = 'line-through';
        ele.style.color = "gray";
    });


  /*  children.forEach(element => {
    };
        console.log(element);
        if (element.tagName !== "IMG") {
            //            console.log(element.tagName);
            try {
                element.style.textDecoration = 'line-through';
                element.style.color = "gray";
            } catch { }
        }
    });*/


 //   img.style.display = "none";
    const options = {
        once: true   // run click handle ronce only no need to remove it
    }
    //click on deleted text to show it again
    deleteable.addEventListener('click', function () {
        //       console.log('showspan click' + this.id + " " + contnr.id);
        event.stopPropagation();
        showspan(deleteable);
    }, options);

}

function showclickhandler(deletable) {

}
function showspan(deletable) {
	try{
		if(deletable.getAttribute('data-hidden') == true || deletable.getAttribute('data-hidden') == "true"){
			 deletable.querySelectorAll('free-text').forEach(ele => {
			try {
				ele.setAttribute['contenteditable'] = false;
				//deletable.querySelectorAll('free-text')[0].setAttribute['contenteditable'] = false
				ele.style.textDecoration = 'none';
				if (ele.contentEditable == true || ele.contentEditable == "true")
					ele.style.color = "blue";
				else
					ele.style.color = "black";
			} catch {}
			});
			return;
		}
	}catch{
		
	}
    try {
	    deletable.style.backgroundcolor = "beige";
        deletable.style.textDecoration = 'none';
        deletable.style.color = "black";
    } catch { }

    deletable.setAttribute('data-hidden', 'false');
    deletable.querySelectorAll('i').forEach(ele => {
        ele.style.display = "inline-block";
    });

    // anything inside a deletable-span must be handled according to the deletable properites
    deletable.querySelectorAll('span m-text m-select').forEach(ele => {
        try {
            ele.style.textDecoration = 'none';
            if (ele.contentEditable)
                ele.style.color = "blue";
            else
                ele.style.color = "black";
        } catch {}
        });
    //fix up inside deleteable's contents if parent is not hidden and the inside one is,
    deletable.querySelectorAll('deletable-span').forEach(ele => {
        console.log(ele.id);
        if (ele.id !== deletable.id) {
            try {
                if (ele.getAttribute('data-hidden') === 'false') {
                    // showspan(ele);
                }
                else
                    hidespan2(ele);
            } catch { }
        }
    });


}


//for testing only-->
function getdata(divid) {
    var ele = document.getElementById(divid);
    var data = [];
    data = getdata2(ele, data);
    // data = data.replace('\n', '').replace('\r', '');
    return data;
    //    console.log(data);
    //    document.getElementById('output').innerHTML = data;
}

function getdata2(root, data) {
    //    console.log("ele " + root.tagName);
    var eles = root.childNodes;
    if (eles == null) {
        return;
    }
    //  console.log("rtrt" + eles.length);
    for (var i = 0; i < eles.length; i++) {
        var ele = eles.item(i);
        //      console.log("rtrt" + ele);
        if (ele === null) {
            //          console.log("rtrt null");
            continue;
        }
		if(typeof ele.tagName == "undefined" || ele.tagName == "undefined" || ele.tagName == ""){
			continue;
		}
        if (ele.tagName === 'deletable-span') {
            try {
                var attr = ele.getAttribute('data-hidden');
                if (attr.toLowerCase() === 'true' || attr.toLowerCase() === true) {   // don't go inside deletable sections
                    continue;
                }
            } catch { }
        }
		
		function Generator() {};

		Generator.prototype.rand =  Math.floor(Math.random() * 26) + Date.now();

		Generator.prototype.getId = function() {
		   return this.rand++;
		};
		var idGen =new Generator();
		
		ele.id = ele.id != "" ? ele.id : idGen.getId();
		if (ele.tagName.toLowerCase() === 'free-text') {
			  if (ele.contentEditable || ele.getAttribute('data-save').toLowerCase() === 'true'  || ele.getAttribute('data-save').toLowerCase() === true) {

                var itemdata = { id: ele.id, data: ele.innerHTML };
                data.push(itemdata);
            }

        }
        else if (ele.tagName.toLowerCase() == 'm-select' || ele.tagName.toLowerCase() === 'mfromapp') {

            var itemdata = { id: ele.id, data: ele.innerHTML };
            data.push(itemdata);

        }
        // else if for m-datenow
        else if (ele.tagName.toLowerCase() == 'm-datenow'|| ele.tagName.toLowerCase() === 'mfromapp') {
            var itemdata = { id: ele.id, data: ele.innerHTML };
            data.push(itemdata);

        }
		else if (ele.tagName.toLowerCase() == 'm-date') {
            var itemdata = {id: ele.id, data: ele.toggleButton.textContent };
            data.push(itemdata);

        }
		else if (ele.tagName.toLowerCase() == 'm-time') {
            var itemdata = { id: ele.id, data: ele.childNodes[0].value };
            data.push(itemdata);

        }
		else if (ele.tagName.toLowerCase() == 'datetime-picker') {
			var datatime = ele.date+" "+ele.time;
	
            var itemdata = { id: ele.id, data: datatime };
            data.push(itemdata);

        }
		else if (ele.tagName.toLowerCase() == 'choose-person') {
			var jsonData = JSON.parse(ele.getAttribute('json-data'));
			var displayFormat = ele.getAttribute('displayformat');
			displayFormat = typeof displayFormat != "undefined" && displayFormat != "undefined" ? displayFormat : "";
			var displayFormatArr = [];
			var displayNameAndAddress = false;
			var displayName = false;
			var displayAddress = false;
			if(displayFormat != ""){
				displayFormatArr = displayFormat.split(",");
				if(displayFormatArr.length > 0){
					for(var f=0;f<displayFormatArr.length;f++){
						if(displayFormatArr[f] == "name"){
							displayName = true;
						}
						if(displayFormatArr[f] == "address"){
							displayAddress = true;
						}
					}
					if(displayName == true && displayAddress == true){
						displayNameAndAddress = true;
					}
				}
			}
			
			var selectedOptionId = null;
			if(jsonData.length > 0){
				for(var p=0;p<jsonData.length;p++){
					
					var label = "";
					 if(displayNameAndAddress == true){
						label = jsonData[p]['name'] +' , '+jsonData[p]['address'];
					 }else if(displayAddress == true){
						label = jsonData[p]['address'];
					 }else{
						label = jsonData[p]['name'];
					 }
					
					if(label == ele.innerHTML){
						selectedOptionId = jsonData[p]['id'];
					}
				}
			}
		    var itemdata = { id: (ele.id+idGen.getId()), data: ele.innerHTML,person_id:selectedOptionId };
            data.push(itemdata);

        }else if (ele.tagName.toLowerCase() == 'choose-vehicle') {
			var jsonData = JSON.parse(ele.getAttribute('json-data'));
			var displayFormat = ele.getAttribute('displayformat');
			displayFormat = typeof displayFormat != "undefined" && displayFormat != "undefined" ? displayFormat : "";
			var displayFormatArr = [];
			var displayNameAndAddress = false;
			var displayName = false;
			var displayAddress = false;
			if(displayFormat != ""){
				displayFormatArr = displayFormat.split(",");
				if(displayFormatArr.length > 0){
					for(var f=0;f<displayFormatArr.length;f++){
						if(displayFormatArr[f] == "name"){
							displayName = true;
						}
						if(displayFormatArr[f] == "address"){
							displayAddress = true;
						}
					}
					if(displayName == true && displayAddress == true){
						displayNameAndAddress = true;
					}
				}
			}
			var selectedOptionId = null;
			if(jsonData.length > 0){
				for(var p=0;p<jsonData.length;p++){
					var label = "";
					 if(displayNameAndAddress == true){
						label = jsonData[p]['name'] +' , '+jsonData[p]['address'];
					 }else if(displayAddress == true){
						label = jsonData[p]['address'];
					 }else{
						label = jsonData[p]['name'];
					 }
					
					if(label == ele.innerHTML){
						selectedOptionId = jsonData[p]['id'];
					}
				}
			}
		    var itemdata = { id: (ele.id+idGen.getId()), data: ele.innerHTML,vehicle_id:selectedOptionId };
            data.push(itemdata);

        }else if (ele.tagName.toLowerCase() == 'choose-officer') {
			var jsonData = JSON.parse(ele.getAttribute('json-data'));
			var displayFormat = ele.getAttribute('displayformat');
			displayFormat = typeof displayFormat != "undefined" && displayFormat != "undefined" ? displayFormat : "";
			var displayFormatArr = [];
			var displayNameAndAddress = false;
			var displayName = false;
			var displayAddress = false;
			if(displayFormat != ""){
				displayFormatArr = displayFormat.split(",");
				if(displayFormatArr.length > 0){
					for(var f=0;f<displayFormatArr.length;f++){
						if(displayFormatArr[f] == "name"){
							displayName = true;
						}
						if(displayFormatArr[f] == "address"){
							displayAddress = true;
						}
					}
					if(displayName == true && displayAddress == true){
						displayNameAndAddress = true;
					}
				}
			}
			var selectedOptionId = null;
			if(jsonData.length > 0){
				for(var p=0;p<jsonData.length;p++){
					var label = "";
					 if(displayNameAndAddress == true){
						label = jsonData[p]['name'] +' , '+jsonData[p]['address'];
					 }else if(displayAddress == true){
						label = jsonData[p]['address'];
					 }else{
						label = jsonData[p]['name'];
					 }
					
					if(label == ele.innerHTML){
						selectedOptionId = jsonData[p]['id'];
					}
				}
			}
		    var itemdata = { id: (ele.id+idGen.getId()), data: ele.innerHTML,officer_id:selectedOptionId };
            data.push(itemdata);

        }
		else if (ele.tagName.toLowerCase() == 'choose-location') {
			var jsonData = JSON.parse(ele.getAttribute('json-data'));
			var selectedOptionId = null;
			if(jsonData.length > 0){
				for(var p=0;p<jsonData.length;p++){
					if(jsonData[p]['location'] == ele.innerHTML){
						selectedOptionId = jsonData[p]['id'];
					}
				}
			}
		    var itemdata = { id: (ele.id+idGen.getId()), data: ele.innerHTML,location_id:selectedOptionId };
            data.push(itemdata);

        }
		else if (ele.tagName.toLowerCase() == 'm-number') {
			//debugger
		    if(ele.getAttribute('has-error') == true || ele.getAttribute('has-error') == "true"){
				return false;
			}
			var itemdata = { id: ele.id, data: ele.innerHTML };
            data.push(itemdata);

        }
		
        // else if (ele.tagName.startsWith('chooser')) {

        //     var attr = ele.getAttribute('data-hasdata');
        //     if (attr === 'true') {
        //         var itemdata = { id: ele.id, data: ele.innerHTML };
        //         data.push(itemdata);
        //     }

        // }
        else
            data = getdata2(ele, data)
    }
    return data;

}


class ShowIf extends HTMLElement {

    constructor() {

        super();
        this.addEventListener("click", function () { this.checkShow() });
    }
    static get observedAttributes() {
        return ['triggeron', 'triggervalue'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName == "triggeron") {
            const ele = this;
            this.setChangeListener(newVal, function () {
                ele.checkShow();
            });
        }
    }

    setChangeListener(divname, listener) {
        const div = document.getElementById(divname);
        if (div === null) {
            setTimeout(() => { this.setChangeListener(divname, listener) }, 100);  //the element hasn't always been created when we get here first time so use timeout to wait for it
        }
        else {
            div.addEventListener("blur", listener);
            div.addEventListener("keyup", listener);
            div.addEventListener("paste", listener);
            div.addEventListener("copy", listener);
            div.addEventListener("cut", listener);
            div.addEventListener("delete", listener);
            div.addEventListener("mouseup", listener);
            div.addEventListener("input", listener);
            div.addEventListener("change", listener); //triggered m-select
            this.checkShow();
        }
    }

    checkShow() {
		//debugger
        const _triggeron = this.getAttribute('triggeron');
        const _triggervalue = this.getAttribute('triggervalue');
        const ele = document.getElementById(_triggeron);
        const val = ele.innerHTML
        if (val === _triggervalue){
			//this.
			this.parentNode.classList.add("show_L_shape");
            this.style.display = "inline";
        }else{
      	this.parentNode.classList.remove("show_L_shape");
            this.style.display = "none";
		}
    }
}

window.customElements.define('show-if', ShowIf);


class FreeText extends HTMLElement {

    constructor() {

        super();
        //this doesn't work  this.contenteditable = true;
        this.setAttribute("contenteditable", true);
    }
    static get observedAttributes() {
        return ['placeholder'];
    }
    _placeholder;
    _typing;
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName == "placeholder") {
            this._placeholder = newVal;
            if (this.innerHTML.trim() === "") {
                this.innerHTML = this._placeholder;
                this.style.textDecoration = 'underline';
                this.style.textDecorationColor = 'red';
            }
        }
        this.setChangeListener(function () {
            if (!this._typing && this.innerHTML.trim() === "") {
                this.innerHTML = this._placeholder;
                this.style.textDecoration = 'underline';
                this.style.textDecorationColor = 'red';
            }
            else if (this.innerHTML.trim() !== "") {
                this._typing = false;
                this.style.textDecoration = 'none';
                this.style.textDecorationColor = 'red';
            }

        });
    }
    setChangeListener(listener) {

        this.addEventListener("blur", function () {
            if (this.innerHTML.trim() === "") {
                this.innerHTML = this._placeholder;
                this.style.textDecoration = 'underline';
                this.style.textDecorationColor = 'red';
            }
        });
        this.addEventListener("keyup", listener);
        this.addEventListener("paste", listener);
        this.addEventListener("copy", listener);
        this.addEventListener("cut", listener);
        this.addEventListener("delete", listener);
        this.addEventListener("mouseup", listener);
        this.addEventListener("input", listener);
        this.addEventListener("change", listener); //triggered m-select
        this.addEventListener("focus", function () {
            this._typing = true;
            if (this.innerHTML === this._placeholder)
                this.innerHTML = "   ";
        }); //triggered m-select
    }


}
window.customElements.define('free-text', FreeText);

class MSelect extends HTMLElement {
    _placeholder;
    constructor() {

        super();
        this.classList.add('chooserbutton');
        this.setAttribute("data-hasdata", "false");
        this.addEventListener('click', function () {
		    msel_clicked(this);
        });
        this._placeholder = this.innerHTML;
    }
    rawvalue() {
        if (this.innerHTML == this._placeholder)
            return "";
        else
            return this.innerHTML;
    }
}
window.customElements.define('m-select', MSelect);

class MDateNow extends HTMLElement {
    _placeholder;
    constructor() {

        super();
        //this.setAttribute("data-hasdata", "false");
        var currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        var today="<b>" + day + "/" + month + "/" + year + "</b>"
        //console.log("today date",today)
        this.innerHTML = today;
    }
    rawvalue() {
        if (this.innerHTML == this._placeholder)
            return "";
        else
            return this.innerHTML;
    }
}
window.customElements.define('m-datenow', MDateNow);

class FixedText extends HTMLElement {

    constructor() {

        super();
    }
    rawvalue() {
        return this.innerHTML;
    }

}
window.customElements.define('fixed-text', FixedText);

class ChooseDate extends HTMLElement {
    _placeholder;
    constructor() {

        super();
        if (this.innerHTML.trim() === "") {
            this._placeholder = 'Choose Date';
            this.innerHTML = "<datetime-picker id='choose_datetime_field' datetime='{{datetime}}' date='{{date}}' default='2021-08-14'></datetime-picker>";
        }
        else {

            this._placeholder = this.innerHTML;
        }
        this.classList.add('chooserbutton');
        this.setAttribute("data-hasdata", "false");
        this.addEventListener('click', function () {
           // window.alert('date chooser');//   NativeFunction(this.tagName)
            this.setAttribute("data-hasdata", "true");
            this.style.backgroundColor = 'white';
        });
    }
    rawvalue() {
        if (this.innerHTML == this._placeholder)
            return "";
        else
            return this.innerHTML;
    }
}
window.customElements.define('choose-date', ChooseDate);


class ChoosePerson extends HTMLElement {
    _placeholder;

    constructor() {

        super();
        if (this.innerHTML.trim() === "") {
            this._placeholder = 'Choose Person';
            this.innerHTML = this._placeholder;
        }
        else {

            this._placeholder = this.innerHTML;
        }
        this.classList.add('chooserbutton');
        this.setAttribute("data-hasdata", "false");
		var personData = getPersonData();
		this.setAttribute("json-data", JSON.stringify(personData));
		
        this.addEventListener('click', function () {
        	choose_person(this);
        });
		/* this.getPersonData = function(){
			var serviceMethodName = "./json_data/person.json";
			var params = {};
			callService(serviceMethodName, this.successGetPersonData, this.errorGetPersonData, params, "get","file_system" );
		}
		this.successGetPersonData = function(response){
			debugger
		}
		this.errorGetPersonData = function(error){
			debugger	
		} */
		
    }
    rawvalue() {
        if (this.innerHTML == this._placeholder)
            return "";
        else
            return this.innerHTML;
    }
}
window.customElements.define('choose-person', ChoosePerson);

class ChooseVehicle extends HTMLElement {
    _placeholder;

    constructor() {

        super();
        if (this.innerHTML.trim() === "") {
            this._placeholder = 'Choose Vehicle';
            this.innerHTML = this._placeholder;
        }
        else {

            this._placeholder = this.innerHTML;
        }
		var vehicleData = getVehicleData();
		this.setAttribute("json-data", JSON.stringify(vehicleData));
        this.classList.add('chooserbutton');
        this.setAttribute("data-hasdata", "false");

        this.addEventListener('click', function () {
            /* window.alert('Vehicle');//   NativeFunction(this.tagName)
            this.setAttribute("data-hasdata", "true");
            this.innerHTML = "BASJ862 Volkwagen Jetta";
            this.style.backgroundColor = 'white'; */
			choose_vehicle(this);
        });
    }
    rawvalue() {
        if (this.innerHTML == this._placeholder)
            return "";
        else
            return this.innerHTML;
    }
}
window.customElements.define('choose-vehicle', ChooseVehicle);
class ChooseOfficer extends HTMLElement {
    _placeholder;

    constructor() {

        super();
        if (this.innerHTML.trim() === "") {
            this._placeholder = 'Choose Officer';
            this.innerHTML = this._placeholder;
        }
        else {

            this._placeholder = this.innerHTML;
        }
		var officerData = getOfficerData();
		this.setAttribute("json-data", JSON.stringify(officerData));
        this.classList.add('chooserbutton');
        this.setAttribute("data-hasdata", "false");

        this.addEventListener('click', function () {
           /*  this.setAttribute("data-hasdata", "true");
            window.alert('Officer');//   NativeFunction(this.tagName)
            this.innerHTML = "Officer Joe 1234";
            this.style.backgroundColor = 'white'; */
			choose_officer(this);
        });
    }
    rawvalue() {
        if (this.innerHTML == this._placeholder)
            return "";
        else
            return this.innerHTML;
    }
}
window.customElements.define('choose-officer', ChooseOfficer);

class ChooseLocation extends HTMLElement {
    _placeholder;

    constructor() {

        super();
        if (this.innerHTML.trim() === "") {
            this._placeholder = 'Choose Location';
            this.innerHTML = this._placeholder;
        }
        else {

            this._placeholder = this.innerHTML;
        }
		var locationData = getLocationData();
		this.setAttribute("json-data", JSON.stringify(locationData));
        this.classList.add('chooserbutton');
        this.setAttribute("data-hasdata", "false");

        this.addEventListener('click', function () {
            /* window.alert('Location');//   NativeFunction(this.tagName)
            this.innerHTML = "123 Pineridge Rd, Carp, Ont K0A 1L0";
            this.style.backgroundColor = 'white'; */
			choose_location(this);
        });
    }
    rawvalue() {
        if (this.innerHTML == this._placeholder)
            return "";
        else
            return this.innerHTML;
    }
}
window.customElements.define('choose-location', ChooseLocation);


class DeletableSpan extends HTMLElement {

    constructor() {

        super();
        //           this.contenteditable = false;
        this.setAttribute('data-hidden', 'false');

    //    let img = document.createElement('img');
    //    img.src = "delete32.png";
    //    img.classList.add('deleteimg');
        let img = document.createElement('i');

        img.classList.add('fas');
        img.classList.add('fa-2x');
        img.classList.add('fa-backspace');
        img.style.color = 'red';
        img.style.verticalAlign = 'middle';
        this.appendChild(img);
        img.addEventListener('click', function () {
            hidespan(img)
        });

    }
    rawvalue() {
        if (this.innerHTML == this._placeholder)
            return "";
        else
            return this.innerHTML;
    }

}
window.customElements.define('deletable-span', DeletableSpan);


class Input extends HTMLElement {
    _placeholder;
    constructor() {

        super();
         // Attaches a shadow root to our custom element.
    const shadowRoot = this.attachShadow({mode: 'open'});
    
    // Defines the "real" input element.
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', this.getAttribute('type'));
    
    inputElement.addEventListener('focus', () => {
      console.log('focus on created input');
    });
        shadowRoot.appendChild(inputElement);
    }
}
//window.customElements.define('Input', Input);

class MNumber extends HTMLElement {
	 _placeholder;

    constructor() {

        super();
        if (this.innerHTML.trim() === "") {
            this._placeholder = 2;
            this.innerHTML = this._placeholder;
        }
        else {

            this._placeholder = this.innerHTML;
        }
		    // Attaches a shadow root to our custom element.
		const shadowRoot = this.attachShadow({mode: 'open'});
		this.isRequired = this.hasAttribute('required');
		this.defaultValue = this.getAttribute('default');
		this.minVal = parseInt(this.getAttribute('min'));
		this.maxVal = parseInt(this.getAttribute('max'));
		// Defines the "real" input element.
		this.spanElement = document.createElement('span');
		let inputElement = document.createElement('input');
		inputElement.setAttribute('type', 'number');
		inputElement.setAttribute('value', this.innerHTML);
		inputElement.style.border = 'initial';
		inputElement.style.height = '30px';
		inputElement.style.borderRadius = '5px';
		inputElement.style.marginRight = '5px';
		inputElement.style.paddingLeft = '10px';
		inputElement.style.paddingRight = '10px';
		inputElement.style.width = '60px';
		
		shadowRoot.appendChild(inputElement);
        shadowRoot.appendChild(this.spanElement);
        
		inputElement.addEventListener('focus', () => {
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
        });
    }
	updateValue(ele,inputElement){
		inputElement.setAttribute('value', inputElement.value);
		ele.innerHTML = inputElement.value;
		if(this.isRequired == true){
			this.validate(ele,inputElement);
		}
	}
	validate(ele,inputElement){
		var mNumberErrorMsgs = templateAllMsgs['m-number'];
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
		}
	}
    rawvalue() {
        if (this.innerHTML == this._placeholder)
            return "";
        else
            return this.innerHTML;
    } 
}
window.customElements.define('m-number', MNumber);