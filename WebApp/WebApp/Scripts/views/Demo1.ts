// we need knockout
import ko = require("knockout");

export class Demo1ViewModel {
    FirstName = ko.observable<string>();

    Submit() {
        var name = this.FirstName();
        if (name)
            alert("Hello " + this.FirstName());
        else
            alert("Please provide a name");
    }
}

ko.applyBindings(new Demo1ViewModel());