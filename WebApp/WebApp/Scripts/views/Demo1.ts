// we need knockout
import ko = require("knockout");

// ensure we register the click-to-edit component
import clickToEdit = require("components/click-to-edit-register");

// dummy line: ensures the click-to-edit component is 'referenced' otherwise
// the compiler removes it from the list of components
var tmp = clickToEdit;

export class Demo1ViewModel {
    FirstName = ko.observable<string>();

    LastName = ko.observable<string>();

    Submit() {
        var fname = this.FirstName();
        var sname = this.LastName();

        if (fname && sname)
            alert("Hello " + fname + " " + sname);
        else
            alert("Please provide a first and last name");
    }
}

ko.applyBindings(new Demo1ViewModel());