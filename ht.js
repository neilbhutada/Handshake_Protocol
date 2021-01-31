    function reload(){
            fetch("/hello.json").
            then(response => response.text()).
            then(data => {
                document.getElementById("yo").innerHTML = data;
                console.log(data)
            });
                
    }
    function unload(){
        fetch("/hello.json", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"Send":1})
            });
    }
