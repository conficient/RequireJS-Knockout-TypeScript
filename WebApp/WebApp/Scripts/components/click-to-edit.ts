/*
    click-to-edit component viewmodel file
    loaded for the click-to-edit viewmodel
 */
import ko = require("knockout");

export interface clickToEditParams {
    value: KnockoutObservable<string>;
}

export class ClickToEditViewModel {
    // true if in view-mode, not edit-mode
    viewMode = ko.observable(true);

    // the value we show/edit
    value: KnockoutObservable<string>;

    // value for editing
    newValue = ko.observable<string>();

    // swith to edit mode
    Edit() {
        // copy the current value
        this.newValue(this.value());
        // change modes
        this.viewMode(false);
    }

    Save() {
        // copy value back
        this.value(this.newValue());
        // change to view mode
        this.viewMode(true);
    }

    Cancel() {
        // don't save changes, revert to view mode
        this.viewMode(true);
    }

    constructor(params: clickToEditParams) {
        if (params && params.value) {
            // copy value observable into our value
            this.value = params.value;
        } else {
            // no observable passed!
            this.value = ko.observable("Error: no observable passed");
        }
    }
}

// return the 'class' which is the constructor function
return ClickToEditViewModel;