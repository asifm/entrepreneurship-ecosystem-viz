// $(function() {
//     // Action to take when slider or related selection menu changes
//     var select = $("#year");
//     var idVariable = $("#variable");
//     var slider = $("<div id='slider'></div>").insertAfter(idVariable).slider({
//         min: 1999,
//         max: 2013,
//         range: "min",
//         value: select[0].value,
//         slide: function(event, ui) {
//             select[0].value = ui.value;
//         }
//     });
//     $("#year").change(function() {
//         slider.slider("value", this.value);
//     });


//     // Action to take when variable selection changes
//     var variable;
//     $("#variable").change(function() {
//         variable = $("#variable").val();
//     })
// });
