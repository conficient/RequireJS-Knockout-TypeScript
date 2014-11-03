define(["require", "exports", "knockout", "components/click-to-edit-register"], function(require, exports, ko, clickToEdit) {
    // dummy line: ensures the click-to-edit component is 'referenced' otherwise
    // the compiler removes it from the list of components
    var tmp = clickToEdit;

    var Demo1ViewModel = (function () {
        function Demo1ViewModel() {
            this.FirstName = ko.observable();
            this.LastName = ko.observable();
        }
        Demo1ViewModel.prototype.Submit = function () {
            var fname = this.FirstName();
            var sname = this.LastName();

            if (fname && sname)
                alert("Hello " + fname + " " + sname);
            else
                alert("Please provide a first and last name");
        };
        return Demo1ViewModel;
    })();
    exports.Demo1ViewModel = Demo1ViewModel;

    ko.applyBindings(new Demo1ViewModel());
});
//# sourceMappingURL=Demo1.js.map
