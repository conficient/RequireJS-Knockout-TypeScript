define(["require", "exports", "knockout"], function(require, exports, ko) {
    var ClickToEditViewModel = (function () {
        function ClickToEditViewModel(params) {
            // true if in view-mode, not edit-mode
            this.viewMode = ko.observable(true);
            // value for editing
            this.newValue = ko.observable();
            if (params && params.value) {
                // copy value observable into our value
                this.value = params.value;
            } else {
                // no observable passed!
                this.value = ko.observable("Error: no observable passed");
            }
        }
        // swith to edit mode
        ClickToEditViewModel.prototype.Edit = function () {
            // copy the current value
            this.newValue(this.value());

            // change modes
            this.viewMode(false);
        };

        ClickToEditViewModel.prototype.Save = function () {
            // copy value back
            this.value(this.newValue());

            // change to view mode
            this.viewMode(true);
        };

        ClickToEditViewModel.prototype.Cancel = function () {
            // don't save changes, revert to view mode
            this.viewMode(true);
        };
        return ClickToEditViewModel;
    })();
    exports.ClickToEditViewModel = ClickToEditViewModel;

    // return the 'class' which is the constructor function
    return ClickToEditViewModel;
});
//# sourceMappingURL=click-to-edit.js.map
