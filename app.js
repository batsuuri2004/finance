// Delgetstei ajillah controller
var uiController = (function(){

})();

// Sanhuutei ajillah controller
var financeController = (function(){

})();

// Programmin holbogch controller
var appController = (function(uiController, financeController){

              var ctrlAddItem = function(){
                            // 1. Oruulah ogogdliin delgetsees olj awna.
                            console.log("zlzl");
                            // 2. Olj awsan ogogdloo sanhuugiin controllert damjuulj tend hadgalna.

                            // 3. Olj awsan ogogdluude web eeree tohiroh hesegt gargana.

                            // 4. Tosviig tootsoolno.

                            // 5. Etssiin uldegdel tootsoog delgetsend gargana.

              }

              document.querySelector(".add__btn").addEventListener("click", function(){
                            ctrlAddItem();
              });

              document.addEventListener("keypress", function(event) 
              {
                            if (event.keyCode === 13 || event.which === 13) {
                            ctrlAddItem();
                            }
              })
})(uiController, financeController);