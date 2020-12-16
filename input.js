// Get the input box
let input = document.getElementById('my-input');

// Init a timeout variable to be used below
let timeout = null;

// Listen for keystroke events
input.addEventListener('keyup', function (e) {
    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);
    function interpInput(valv) {
        re = "'" + valv + "'";
        if (valv.includes(".help")) {
            re = "Prompt Says...";
            if (valv.includes("/commands"))
            {
                re = re + "<br>--> .add , use to add numbers";
            }
            else if (valv.includes("/info"))
            {
                re = re + "<br>To enter a command, simply type it in and give the prompt 1 second to read your input"
            }
            else 
            {
                re = re + "<br>use .help/commands for syntax on commands<br>use .help/info for more information on using this prompt"
            }
        }
        return (re);
    }
    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(function () {
        document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + "->" + interpInput(input.value) + "<br>";
        input.value = "";
    }, 1000);
});