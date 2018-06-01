(function() {
    "use strict";

    var counter = 0;
    var interval = 1;

    var intervalTop;
    intervalTop = setInterval(function updateTimer() {
        {
            if (counter == 1424) {
                clearInterval(intervalTop);
            } else if (counter <= 1423) {
                document.getElementById('counter').innerHTML = counter.toLocaleString();
            }
            counter++;
        }
    }, interval);
})();
