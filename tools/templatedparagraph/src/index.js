/**
 * Build styles
 */
//require('./index.css').toString();

/**
 * Base Paragraph Block for the Editor.js.
 * Represents simple paragraph with templating support (special save data)
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */

/**
 * @typedef {object} TemplatedParagraphConfig
 * @property {string} placeholder - placeholder for the empty paragraph
 * @property {boolean} preserveBlank - Whether or not to keep blank paragraphs when saving editor data
 */

/**
 * @typedef {Object} TemplatedParagraphData
 * @description Tool's input and output data format
 * @property {String} text — TemplatedParagraphData's content. Can include HTML tags: <a><b><i>
 */
class TemplatedParagraph {
    /**
     * Default placeholder for TemplatedParagraph Tool
     *
     * @return {string}
     * @constructor
     */
    static get DEFAULT_PLACEHOLDER() {
        return '';
    }

    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - constructor params
     * @param {TemplatedParagraphData} params.data - previously saved data
     * @param {TemplatedParagraphConfig} params.config - user config for Tool
     * @param {object} params.api - editor.js api
     * @param {boolean} readOnly - read only mode flag
     */
    constructor({ data, config, api, readOnly }) {
        this.api = api;
        this.readOnly = readOnly;

        this._CSS = {
            block: this.api.styles.block,
            wrapper: 'ce-paragraph'
        };

        if (!this.readOnly) {
            this.onKeyUp = this.onKeyUp.bind(this);
        }

        /**
         * Placeholder for paragraph if it is first Block
         * @type {string}
         */
        this._placeholder = config.placeholder ? config.placeholder : TemplatedParagraph.DEFAULT_PLACEHOLDER;
        this._data = {};
        this._element = this.drawView();
        this._preserveBlank = config.preserveBlank !== undefined ? config.preserveBlank : false;

        this.data = data;
    }

    /**
     * Check if text content is empty and set empty string to inner html.
     * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
     *
     * @param {KeyboardEvent} e - key up event
     */
    onKeyUp(e) {
        if (e.code !== 'Backspace' && e.code !== 'Delete') {
            return;
        }

        const { textContent } = this._element;

        if (textContent === '') {
            this._element.innerHTML = '';
        }
    }

    /**
     * Create Tool's view
     * @return {HTMLElement}
     * @private
     */
    drawView() {
        let div = document.createElement('DIV');

        div.classList.add(this._CSS.wrapper, this._CSS.block);
         div.contentEditable = false;
        div.dataset.placeholder = this.api.i18n.t(this._placeholder);
        this. readOnly = true;
        if (!this.readOnly) {
    //            div.contentEditable = true;
            div.addEventListener('keyup', this.onKeyUp);
        }

        return div;
    }

    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement}
     */
    render() {
        return this._element;
    }

    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     * @param {TemplatedParagraphData} data
     * @public
     */
    merge(data) {
        let newData = {
            text: this.data.text + data.text
        };

        this.data = newData;
    }


    /**
     * Validate Paragraph block data:
     * - check for emptiness
     *
     * @param {TemplatedParagraphData} savedData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(savedData) {
        console.log("called validate()");
        //  if (savedData.text.trim() === '' && !this._preserveBlank) {
        //  return false;
        // }

		if(savedData.text.length <= 0){
			return false;
		}
        return true;
    }

    /**
     * Extract Tool's data from the view
     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
     * @returns {TemplatedParagraphData} - saved data
     * @public
     */
    save(toolsContent) {
	    //   window.alert("saving");
        var data = [];
        data = getdata2(toolsContent, data);
        console.log(JSON.stringify(data));
        return {
            text: data
        };
    }
	
    /**
     * On paste callback fired from Editor.
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(event) {
        const data = {
            text: event.detail.data.innerHTML
        };

        this.data = data;
    }

    /**
     * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
     */
    static get conversionConfig() {
        console.log("called conversionConfig()");
        return {
            export: 'text', // to convert TemplatedParagraph to other block, use 'text' property of saved data
            import: 'text' // to covert other block's exported string to Paragraph, fill 'text' property of tool data
        };
    }

    /**
     * Sanitizer rules
     */
    static get sanitize() {
        console.log("called sanitize()");
        return {
            text: {
                br: true,
            }
        };
    }

    /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @return {boolean}
     */
    static get isReadOnlySupported() {
        return false;
    }

    /**
     * Get current Tools`s data
     * @returns {TemplatedParagraphData} Current data
     * @private
     */
    get data() {
        let text = this._element.innerHTML;

        this._data.text = text;
        console.log("called data()");
        return this._data;
    }

    /**
     * Store data in plugin:
     * - at the this._data property
     * - at the HTML
     *
     * @param {ParagraphData} data — data to set
     * @private
     */
    set data(data) {
        this._data = data || {};
        //      console.log("called setdata()" + this._data.text);
        this._element.innerHTML = this._data.text || '';
    }

    /**
     * Used by Editor paste handling API.
     * Provides configuration to handle P tags.
     *
     * @returns {{tags: string[]}}
     */
    static get pasteConfig() {
        return {
            tags: ['xx']
        };
    }

    /**
     * Icon and title for displaying at the Toolbox
     *
     * @return {{icon: string, title: string}}
     */
    static get toolbox() {
        return {
            //   icon: require('./toolbox-icon.svg').default,
            title: 'Text'
        };
    }
}

//module.exports = TemplatedParagraph;
