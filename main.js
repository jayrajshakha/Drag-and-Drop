
const items = document.querySelectorAll(".item");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

for(item of items){
    item.addEventListener("dragstart",
    function(e){
        let seleted = e.target;

        rightBox.addEventListener("dragover",
        function(e){
            e.preventDefault();
        })
        rightBox.addEventListener("drop",
        function(e){
            rightBox.appendChild(seleted);
            seleted = null;
        })
        leftBox.addEventListener("dragover",
        function(e){
            e.preventDefault();
        })
        leftBox.addEventListener("drop",
        function(e){
            leftBox.appendChild(seleted);
            seleted = null;
        })
    })
}