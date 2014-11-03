import ko = require("knockout");

// register the component
ko.components.register("click-to-edit", {
    viewModel: { require: "components/click-to-edit" },
    template: { require: "text!components/click-to-edit.html" }
});