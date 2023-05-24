var pointer = document.getElementById("centerGem");

		window.addEventListener("mousemove", function(event) {
			var x = event.clientX;
			var y = event.clientY;

			var boxCenterX = pointer.offsetLeft + (pointer.offsetWidth / 1);
			var boxCenterY = pointer.offsetTop + (pointer.offsetHeight / 1);

			var angle = Math.atan2(y - boxCenterY, x - boxCenterX) *300 / Math.PI;

			pointer.style.transform = "rotate(" + angle + "deg)";
		});


const me = document.querySelectorAll(".me")
const bio = document.querySelectorAll(".bio")
const pText = document.querySelectorAll(".pText")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
})

me.forEach((el) => observer.observe(el))
bio.forEach((el) => observer.observe(el))
pText.forEach((el) => observer.observe(el))