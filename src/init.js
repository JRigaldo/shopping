/* Additionnal material */
import {MDCDataTable} from '@material/data-table';
import {MDCSlider} from '@material/slider/index';
import {MDCFormField} from '@material/form-field/index';
import {MDCCheckbox} from '@material/checkbox/index';
import {MDCTextField} from '@material/textfield/index';
import {MDCSelect} from '@material/select/index';
import {MDCTopAppBar} from "@material/top-app-bar/index";
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar/index';
import {MDCDrawer } from '@material/drawer/index';
import {MDCList } from '@material/list/index';
import {MDCChipSet} from '@material/chips/index';
import {MDCTabBar} from '@material/tab-bar/index';
import {MDCDialog} from '@material/dialog/index';
import {MDCRipple} from '@material/ripple/index';
import {MDCRadio} from '@material/radio/index';
import {MDCSelectIcon} from '@material/select/icon';
import {Uppy} from '@uppy/core';


// Init datatable elements
var arrayEls = Array.from(document.querySelectorAll('.mdc-data-table'));
if(typeof arrayEls !== 'undefined' && arrayEls.length > 0) {
    arrayEls.forEach((arrayEl) => {
        const datatable = new MDCDataTable(arrayEl);
    });
}

// Init input field elements
var inputEls = Array.from(document.querySelectorAll('.text-field-container .mdc-text-field'));
if(typeof inputEls !== 'undefined' && inputEls.length > 0) {
    inputEls.forEach((inputEl) => {
        const input = new MDCTextField(inputEl);
        var textEl = $(inputEl).find(".mdc-text-field__input");
        var countEl = $(inputEl).find("#characters-count");
        if(typeof countEl !== 'undefined') {
            $(inputEl).find("#characters-count").text($(textEl).val().length);
            $(textEl).keyup(function(){
                $(inputEl).find("#characters-count").text($(textEl).val().length);
            });
        }
    });
}

// Init checkbox elements
var checkboxEls = Array.from(document.querySelectorAll('.mdc-checkbox'));
if(typeof checkboxEls !== 'undefined' && checkboxEls.length > 0) {
    checkboxEls.forEach((checkboxEl) => {
        const checkbox = new MDCCheckbox(checkboxEl);
        const inputCheckbox = checkboxEl.querySelector('input[type=checkbox]');
//        inputCheckbox.addEventListener('click', function(e) {
//            console.log("event init : "+checkbox.foundation_.adapter_.isChecked());
//        });
    });
}

// Init radio choice elements
var radioEls = Array.from(document.querySelectorAll('.mdc-radio'));
if(typeof radioEls !== 'undefined' && radioEls.length > 0) {
    radioEls.forEach((radioEl) => {
        const radio = new MDCRadio(radioEl);
        const formField = new MDCFormField(radioEl.parentElement.parentElement.querySelector('.mdc-form-field'));
        formField.input = radio;
    });
}

// Init choices elements
var choiceEls = Array.from(document.querySelectorAll('.mdc-select'));
if(typeof choiceEls !== 'undefined' && choiceEls.length > 0) {
    choiceEls.forEach((choiceEl) => { 
        const choice = new MDCSelect(choiceEl);
        choice.listen('MDCSelect:change', () => {

            var hiddenSelectOptions = Array.from(choiceEl.querySelectorAll('.mdc-select-hidden-input option'));
            if(typeof hiddenSelectOptions !== 'undefined' && hiddenSelectOptions.length > 0) {
            hiddenSelectOptions.forEach((hiddenSelectOption) => {
                $(hiddenSelectOption).removeAttr('selected');
            });
            }
            var hiddenSelectedOption = $(hiddenSelectOptions)[choice.selectedIndex];

            $(hiddenSelectedOption).attr('selected', 'selected');
        });
    });
}

// Init top app bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
if(topAppBarElement) {
    const topAppBar = new MDCTopAppBar(topAppBarElement);
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    
    topAppBar.setScrollTarget(document.getElementById('main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
        
        drawer.open = !drawer.open;
    });

    const list = MDCList.attachTo(document.querySelector('.mdc-list'));
    list.wrapFocus = true;
}

// Init tabs bar
var mdcTabBar = document.querySelector('.mdc-tab-bar');
if(mdcTabBar) {
    const tabBar = new MDCTabBar(mdcTabBar);
}

// Init chip set
var chipSetEls = Array.from(document.querySelectorAll('.mdc-chip-set'));
if(typeof chipSetEls !== 'undefined' && chipSetEls.length > 0) {
    chipSetEls.forEach((chipSetEl) => {
        const chipSet = new MDCChipSet(chipSetEl);
    });
}

// Init Ripple
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
      return new MDCRipple(el);
});

// Init dialog box
var dialogEls = Array.from(document.querySelectorAll('.mdc-dialog'));
if(typeof dialogEls !== 'undefined' && dialogEls.length > 0) {
    dialogEls.forEach((dialogEl) => {
        const dialog = new MDCDialog(dialogEl);
        dialogEl.removeAttribute('aria-hidden');
        var dialogCloseEls = Array.from(dialogEl.querySelectorAll('.mdc-dialog .mdc-button-close'));
        if(typeof dialogCloseEls !== 'undefined' && dialogCloseEls.length > 0) {
            dialogCloseEls.forEach((dialogCloseEl) => {
                $(dialogCloseEl).on('click', function() {
                    dialogEl.classList.remove("mdc-dialog--open");
                });
            });
        }
        var dialogReloadEl = document.querySelector('.mdc-dialog .mdc-button-reload');
        if(dialogReloadEl) {
            $(dialogReloadEl).on('click', function() {
                dialogEl.classList.remove("mdc-dialog--open");
                window.location = window.location;
            });
        }
    });

}

// Init CKeditor
var ckeditorEls = Array.from(document.querySelectorAll('.mdc-ckeditor-field'));
if(typeof ckeditorEls !== 'undefined' && ckeditorEls.length > 0) {
    ckeditorEls.forEach((ckeditorEl) => {
        CKEDITOR.replace(ckeditorEl);
    });
}

// Init color palette
var colorpickerEls = Array.from(document.querySelectorAll('.colorpicker-field'));
if(typeof colorpickerEls !== 'undefined' && colorpickerEls.length > 0) {
    colorpickerEls.forEach((colorpickerEl) => {
        $(colorpickerEl).spectrum({
            showPaletteOnly: true,
            showPalette:true,
            preferredFormat: "hex",
            allowEmpty:true,
            color: colorpickerEl.value,
            palette: [
                ['#FFFFFF', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF'],
                ['#F0FF00', '#FFB3BA', '#FDF498', '#8B9DC3', '#0392CF'],
                ['#FDCC00', '#FC913A', '#F9D62E', '#EAE374', '#E2F4C7'],
                ['#00ABA9', '#FF0097', '#A200FF', '#1BA1E2', '#F09609'],
                ['#FBAE00', '#693F7B', '#39589A', '#FF9900', '#FF7100']
            ]
        });
    });
}

// Init datetext input mask
var dateTextEls = Array.from(document.querySelectorAll('.mdc-date-text'));
if(typeof dateTextEls !== 'undefined' && dateTextEls.length > 0) {
    dateTextEls.forEach((dateTextEl) => {
        $(dateTextEl).mask('00/00/0000');
    });
}

// Init datepicker
var datepickerEls = Array.from(document.querySelectorAll('.datepicker'));
if(typeof datepickerEls !== 'undefined' && datepickerEls.length > 0) {
    var d = new Date();
    var strMinDate = null;
    var strMaxDate = null;
    var strNowDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

    strMinDate = "01/01/" + (d.getFullYear() - 1);
    strMaxDate = "31/12/" + (d.getFullYear() + 1);

    datepickerEls.forEach((datepickerEl) => {
        const datepicker = $(datepickerEl).datepicker({
            defaultDate: strNowDate,
            minDate: strNowDate,
            maxDate: strMaxDate,
            closeText: "OK", // Display text for close link
            prevText: "Précédent", // Display text for previous month link
            nextText: "Suivant", // Display text for next month link
            currentText: "Aujourd'hui", // Display text for current month link
            monthNames: [ "Janvier","Février","Mars","Avril","Mai","Juin",
            "Juillet","Août","Septembre","Octobre","Novembre","Decembre" ], // Names of months for drop-down and formatting
            monthNamesShort: [ "Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Dec" ], // For formatting
            dayNames: [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ], // For formatting
            dayNamesShort: [ "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam" ], // For formatting
            dayNamesMin: [ "Di","Lu","Ma","Me","Je","Ve","Sa" ], // Column headings for days starting at Sunday
            weekHeader: "Wk", // Column header for week of the year
            dateFormat: "dd/mm/yy", // See format options on parseDate
            firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
            isRTL: false, // True if right-to-left language, false if left-to-right
            showMonthAfterYear: false, // True if the year select precedes month, false for month then year
            yearSuffix: "" // Additional text to append to the year in the month headers
        });
    });
}

// Import the plugins

var mdcFileEls = Array.from(document.querySelectorAll('.mdc-drag-drop-area'));
if(typeof mdcFileEls !== 'undefined' && mdcFileEls.length > 0) {

    mdcFileEls.forEach((mdcFileElement) => {

        if(mdcFileElement) {
            const DragDrop = require('@uppy/drag-drop');
            const ProgressBar = require('@uppy/progress-bar');
            const Tus = require('@uppy/tus');
            const XHRUpload = require('@uppy/xhr-upload');
            var onUploadSuccess = function onUploadSuccess(elForUploadedFiles) {
                return function (file, response) {
                    var fileName = file.name;
                    
                    if(response.body.nbLines) {
                        document.querySelector(elForUploadedFiles).innerHTML += "<li>Import du fichier '" + fileName + "' terminé :" 
                            + "<ul>" 
                            + "<li>Nombre de lignes: " + response.body.nbLines + "</li>"
                            + "<li>Nombre de membres crées: " + response.body.nbCreated + "</li>"
                            + "<li>Nombre de membres mis à jour: " + response.body.nbUpdated + "</li>"
                            + "<li>Nombre d'erreurs: " + response.body.nbErrors + "</li>"
                            + "</ul></li>";
                    } else if(response.body.imagePath) {
                        mdcFileElement.parentElement.querySelector('.mdc-file-img-preview').innerHTML = "<img src=\"" + response.body.imagePath + "\" width=\"300\" />";
                        mdcFileElement.parentElement.querySelector('.mdc-file-value').value = response.body.imagePath;
                    }
                };
            };
            var uppyOne = new Uppy({
                debug: true,
                autoProceed: true
            });

            uppyOne.use(DragDrop, {
                target: '#' + $(mdcFileElement).attr('id'),
                width: '100%',
                maxNumberOfFiles: 1,
                allowedFileTypes: ['.jpg', '.jpeg', '.png', '.csv'],
                height: '150px'
            }).use(XHRUpload, {
                endpoint: $(mdcFileElement).attr('data-action'),
                fieldName: 'my_file'
            }).on('upload-success', onUploadSuccess('#uploaded-files ol'));
        }
    });
}

