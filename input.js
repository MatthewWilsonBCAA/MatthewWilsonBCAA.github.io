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
        window.scrollBy(0, 2000);
        re = "'" + valv + "'";
        if (valv.includes(".help")) {
            re = "Prompt Says...";
            if (valv.includes("/commands"))
            {
                re = re + "<br>--> .clear , use to clear the prompt<br>--> .goats , show my goats off";
                re = re + "<br>--> .destiny , use to show the basics of Destiny 2";
                re = re + "<br>--> .give_me_cake";
                re = re + "<br>--> .skcm";
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
        if (valv.includes(".clear"))
        {
            re = ".clear";
        }
        if (valv.includes(".goats"))
        {
            re = "My goats:"
            var goats = ["Sweetie", "Lily", "Sissy", "Chloe", "Adam", "Eve", "Trixie", 
                    "Dixie", "Rabbit", "Maggie", "Dakota", "Dusty", "Tiny", "Rex",
                    "Ellie", "Jet", "Noel", "Midnight", "Max"];
            for (i = 0; i < 19; i++)
            {
                re = re + "<br>" + goats[i];
            }
        }
        if (valv.includes(".destiny"))
        {
            re = "Bryce says...";
            if (valv.includes("/classes"))
            {
                re = re + "<br>The three classes are Titan, Warlock, and Hunter";
            }
            else if (valv.includes("/sub_classes"))
            {
                re = re + "<br>The sub classes are Void, Arc, Solar, and Stasis";
            }
            else if (valv.includes("/guardians"))
            {
                re = re + "<br>The main task of the Guardians is to defend the Traveler, their source of power";
            }
            else
            {
                re = re + "<br>The Traveler is important to the Guardians!<br>--> .destiny/classes , for class information<br>--> .destiny/sub_classes , for subclass information<br>--> .destiny/guardians , for information on Guardians";
            }
        }
        if (valv.includes(".give_me_cake"))
        {
            re = "The Cake is a lie";
        }
        if (valv.includes(".skcm"))
        {
            re = "Stardust Kingdoms: Crying Moon is my game! Go to it in my projects tab!";
        }
        return (re);
    }
    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(function () {
        out = interpInput(input.value);
        if (out != ".clear")
        {
            document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + "->" + out + "<br>";
        }
        else {
            document.getElementById("demo").innerHTML = " ";
        }
        input.value = "";
    }, 1000);
});