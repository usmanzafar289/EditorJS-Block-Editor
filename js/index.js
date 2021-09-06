// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';
// import list from '@editorjs/list';
// import Embed from '@editorjs/embed';

/**
 * To initialize the Editor, create a new instance with configuration object
 * @see docs/installation.md for mode details
 */
var editor = new EditorJS({
  readOnly: false,

  holder: "editorjs",

  /**
   * Common Inline Toolbar settings
   * - if true (or not specified), the order from 'tool' property will be used
   * - if an array of tool names, this order will be used
   */
  inlineToolbar: ["link", "marker", "bold", "italic"],
  inlineToolbar: true,

  tools: {
    /**
     * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}

    image: {
        class: ImageTool,
        config: {
            endpoints: {
                byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            }
        }
    },   */

    image: SimpleImage,

    templatedparagraph: {
      class: TemplatedParagraph,
      config: {},
    },

    attaches: {
      class: AttachesTool,
      config: {
        endpoint: "http://localhost:8008/uploadFile",
      },
    },
  },

  /**
   * This Tool will be used as default
   */
  // defaultBlock: 'paragraph',

  /**
   * Initial Editor data
   */
  data: {
    blocks: [
      {
        type: "paragraph",
        data: {
          text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Another Paragraph",
        },
      },
    ],
  },
  onReady: function () {
    saveButton.click();
  },
  onChange: function (api, block) {
    console.log("something changed", block);
  },
});

/**
 * Saving button
 */
const saveButton = document.getElementById("saveButton");
const blockButton = document.getElementById("blockButton");
const imageButton = document.getElementById("imageButton");
const paraButton = document.getElementById("paraButton");
const fileButton = document.getElementById("fileButton");

/**
 * Toggle read-only button
 */
const toggleReadOnlyButton = document.getElementById("toggleReadOnlyButton");
const readOnlyIndicator = document.getElementById("readonly-state");

/**
 * Saving example
 */
saveButton.addEventListener("click", function () {
  editor
    .save()
    .then((savedData) => {
      //   cPreview.show(savedData, document.getElementById("output"));
      console.log(savedData);
      blockdata = JSON.stringify(savedData, null, 4);
      document.getElementById("jsonData").innerHTML = blockdata;
      // Native("saveCallback", savedData);
    })
    .catch((error) => {
      console.error("Saving error", error);
    });
});
const templatedata = { text: " some text" };

/*templatedata.text = `
                <div class="ce-example-border">
                    <free-text>this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. this is a large block of editable text. t
his is a large block of editable text. this is a large block of editable text. this is a large block of editable text.
this is a large block of editable text. </free-text>
                    <m-select id="aaa" choices='aaa|bbb|ccc' multiple >multiple choice field </m-select>
                    fixed text
                    <m-select id="bbb" onclick='msel_clicked(this)' choices='aaa|bbb|ccc'>choice field </m-select>
                    <m-select id="ccc" onclick='msel_clicked(this)' choices='aaa|bbb|ccc'>choice field</m-select>
                    postfix
                    <p><deletable-span id=d1>
                        this is a deletable paragraph with some editable text and some fixed text and a deletable word inside the deletable paragraph
                          <free-text  placeholder='type something here placeholder'></free-text>
                        more   deleteable fixed text
                            <deletable-span id=d2>A deleteable word</deletable-span>
                   some extra words here</deletable-span></p>
                   </br><m-datenow id="ddd">Date field</m-datenow></br>
                   </br><m-date id="ddd">Date field</m-date>
                   <m-time id="time">
                   <input type="text"  id="timepicker" value="" />
                    </m-time>
                           
        <dom-bind>
          <template is="dom-bind">
            <datetime-picker
              datetime="{{datetime}}"
              date="{{date}}"
              default="2021-08-12"
            ></datetime-picker>
          </template>
        </dom-bind></br></br>

</br><choose-date> </choose-date/> <choose-person/></choose-person><choose-vehicle></choose-vehicle>
<choose-officer></choose-officer/> <choose-location></choose-location/>
<p>was clothing removed <m-select id="q1" choices='Yes|No'>Yes/No</m-select>
<p><show-if  triggervalue='Yes' triggeron='q1'>What items were removed? <free-text style='width:100px'>type here</free-text></show-if></p>
<p>Type Yes here to trigger a new field ->   <free-text id='q2'>Test</free-text>
<p><show-if  triggervalue='Yes' triggeron='q2'>Type more data here <free-text style='width:100px' placeholder='type something here placeholder'></free-text></show-if></p>
             </div>
`;*/

var templateHTMLData = "";
templateHTMLData += "<div class='ce-example-border'>";
templateHTMLData +=
  "<contact-person id='contact_person'></contact-person></br></br>";

templateHTMLData +=
  "<free-text id='text-free'>this is a large block of editable text</free-text></br></br>";
templateHTMLData +=
  "<m-select id='person' choices='Usman|Ian|Mark' multiple >multiple choice field </m-select>";
templateHTMLData +=
  "<m-select id='bbb' onclick='msel_clicked(this)' choices='aaa|bbb|ccc'>choice field </m-select>";
templateHTMLData +=
  "<m-select id='ccc' onclick='msel_clicked(this)' choices='aaa|bbb|ccc'>choice field</m-select>";
templateHTMLData +=
  "<m-number class='textbox' id='m_number' min='1' default='2' max='5' required></m-number></br></br>";
templateHTMLData +=
  "<p><deletable-span id=d1>this is a deletable paragraph with some editable text and some fixed text and a deletable word inside the deletable paragraph";
templateHTMLData +=
  "<free-text  placeholder='type something here placeholder'></free-text> more   deleteable fixed text";
//templateHTMLData += "<deletable-span id=d2>A deleteable word</deletable-span>some extra words here</deletable-span></p>";
templateHTMLData +=
  "</deletable-span><deletable-span id=d2>A deleteable word</deletable-span></p>";
templateHTMLData +=
  "<m-datenow id='m_datenow_field'>Date field</m-datenow></br></br>";
templateHTMLData += "<m-date id='m_date_field'>Date field</m-date>";
templateHTMLData += "<m-time id='time'>";
templateHTMLData += "<input type='text' id='timepicker' value='' />";
templateHTMLData += "</m-time>";

templateHTMLData += "<dom-bind>";
templateHTMLData += "<template is='dom-bind'>";
//templateHTMLData += "<datetime-picker id='datetime_field' datetime='{{datetime}}' date='{{date}}' default='2021-08-12'></datetime-picker>";
templateHTMLData += "</template>";
templateHTMLData += "</dom-bind>";
templateHTMLData += "<choose-date> </choose-date/>";
templateHTMLData += "</br></br>";
templateHTMLData +=
  "<choose-person onclick='choose_person(this)' id='choose_person' displayformat='name,address'/></choose-person>";
templateHTMLData +=
  "<choose-vehicle onclick='choose_vehicle(this)' id='choose_vehicle' displayformat='name,address'></choose-vehicle>";
templateHTMLData +=
  "<choose-officer onclick='choose_officer(this)' id='choose_officer' displayformat='name,address'></choose-officer/>";
templateHTMLData +=
  "<choose-location onclick='choose_location(this)' id='choose_location'></choose-location/>";
templateHTMLData +=
  "<p>Was clothing removed <m-select id='q1' choices='Yes|No'>Yes/No</m-select></p>";
templateHTMLData +=
  "<p class='showif_parent_p triggeron_q1'><show-if triggervalue='Yes' id='q2' triggeron='q1'>What items were removed? <free-text style='width:100px'>type here</free-text></show-if></p>";
templateHTMLData +=
  "<p>Type Yes here to trigger a new field ->   <free-text id='q3'>Test</free-text>";
templateHTMLData +=
  "<p class='showif_parent_p triggeron_q3'><show-if  triggervalue='Yes' triggeron='q3' id='q4'>Type more data here <free-text style='width:100px' placeholder='type something here placeholder'></free-text></show-if></p>";

templateHTMLData += "</div>";

templatedata.text = templateHTMLData;

blockButton.addEventListener("click", function () {
  //window.alert( editor.blocks, data);
  var index = editor.blocks.getBlocksCount();

  editor.blocks.insert("templatedparagraph", templatedata, null, index, true);
  // attach time picker loading
  tp.attach({
    target: "timepicker",
  });
});
paraButton.addEventListener("click", function () {
  //window.alert( editor.blocks, data);
  var index = editor.blocks.getBlocksCount();

  var text = { text: "new paragraph" };
  editor.blocks.insert("paragraph", text, null, index, true);
});

imageButton.addEventListener("click", function () {
  //window.alert( editor.blocks, data);
  // Native("addAttachment");
  var index = editor.blocks.getBlocksCount();
  var text = {
    caption: "caption",
    url: "http://ianb.ca/Photos/P1000615.JPG",
  };
  console.log("Imgtext", text);
  editor.blocks.insert("image", text, null, index, true);
});

function addBlock(type, data) {
  var index = editor.blocks.getBlocksCount();
  // console("index",editor.blocks.getBlocksCount())
  editor.blocks.insert(type, data, null, index, true);
}
/**
 * Toggle read-only example
 */
toggleReadOnlyButton.addEventListener("click", async () => {
  const readOnlyState = await editor.readOnly.toggle();

  readOnlyIndicator.textContent = readOnlyState ? "On" : "Off";
});

function hasClass(ele, cls) {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}