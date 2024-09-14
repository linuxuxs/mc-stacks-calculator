var num = document.getElementById("inp");
var res = document.getElementById("result");
var btn = document.getElementById("btn-conv");

btn.addEventListener('click', function() {

    var blocks = parseInt(num.value);

    if (isNaN(blocks) || blocks < 0) {
        res.textContent = "Error. Enter valid number.";
    } else {
        var stacks = Math.floor(blocks / 64);
        var reman = blocks % 64;
        

        if (stacks === 0) {
            res.textContent = reman + " block(s)";
        } else if (stacks === 1) {
            if (reman > 0) {
                res.textContent = 1 + " stack & " + reman;
            } else {
                res.textContent = 1 + " stack";
            }
        }

        else {
            if (reman > 0) {
                res.textContent = stacks + " stacks & " + reman;
            } else {
                res.textContent = stacks + " stacks";
            }
        }
    }
});    