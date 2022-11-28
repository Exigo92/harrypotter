document.getElementById("btn").addEventListener("click", function(){


    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://hp-api.herokuapp.com/api/characters", true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var potter = JSON.parse(xhr.responseText);
            console.log(potter);

            var output = "";

            for(var i in potter){

                output += `

                <div>
                    <h3>${potter[i].name}</h3>
                    <p>${potter[i].house}</p>
                    <img src='${potter[i].image}' />
                </div>
                
                `;
            }

            document.querySelector(".result").innerHTML = output;
        }
    }

    xhr.send();
})