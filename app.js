// Delgetstei ajillah controller
var uiController = (function() {
              var DOMstrings = {
              inputType: ".add__type",
              inputDescription: ".add__description",
              inputValue: ".add__value",
              addBtn: ".add__btn"
              };            


              return {
                            getInput: function() {
                            return {
                            type: document.querySelector(DOMstrings.inputType).value,
                            description: document.querySelector(DOMstrings.inputDescription).value,
                            value: document.querySelector(DOMstrings.inputValue).value
                            };
                            },
                            
                            getDOMstrings: function() {
                            return DOMstrings;
                            }
              };
})();

// Sanhuutei ajillah controller
var financeController = (function(){

})();

// Programmin holbogch controller
var appController = (function(uiController, financeController){

              var DOM = uiController.getDOMstrings();

              var ctrlAddItem = function(){
                            // 1. Oruulah ogogdliin delgetsees olj awna.
                            console.log(uiController.getInput());
                            // 2. Olj awsan ogogdloo sanhuugiin controllert damjuulj tend hadgalna.

                            // 3. Olj awsan ogogdluude web eeree tohiroh hesegt gargana.

                            // 4. Tosviig tootsoolno.

                            // 5. Etssiin uldegdel tootsoog delgetsend gargana.

              }

              document.querySelector(DOM.addBtn).addEventListener("click", function(){
                            ctrlAddItem();
              });

              document.addEventListener("keypress", function(event) 
              {
                            if (event.keyCode === 13 || event.which === 13) {
                            ctrlAddItem();
                            }
              })
})(uiController, financeController);