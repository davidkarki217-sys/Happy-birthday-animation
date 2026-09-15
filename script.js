const balloons = document.querySelectorAll(".balloon");

balloons.forEach((balloon) => {

    balloon.addEventListener("animationiteration", () => {

        const randomX = Math.floor(Math.random() * 60) - 30;

        balloon.style.marginLeft = randomX + "px";

    });

});