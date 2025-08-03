// var output = document.querySelector("div");
// var myip = document.querySelector("input");
// var first = document.querySelector("button");
// first.addEventListener("click", getInfo);

// async function getInfo() {

// try {
    
//     var url = "https://api.ipstack.com/"+myip.value+"?access_key=a2c0265c8690035c908c5b9244622cd5";
//     const res = await fetch(url);
//     const data = await res.json();

//     var answer = "";
//     answer += "<li>Your ip:" +data.ip;
//     answer += "<li>Your country:" +data.country_name;
//     answer += "<li>Your city:" +data.city;
//     answer += "<li>Your languages:" + data.location.languages.name;
//     answer += "<li><img src="+ data.location.country_flag+">";


//     output.innerHTML = "<pre>"+answer+"</pre>";
//     // output.innerHTML = "<pre>" + JSON.stringify(result,2,2)+ "</pre>";
//     }

//     catch (error) {
//         console.error(error);
//     }

// }


var output = document.querySelector("div");
var myip = document.querySelector("input");
var first = document.querySelector("button");
first.addEventListener("click", getInfo);

async function getInfo() {

try {
    

    const res = await fetch(`http://ip-api.com/json/${myip.value}`);
    const data = await res.json();
    console.log(data);

     let html = `
        <ul>
          <li>IP: ${data.query}</li>
          <li>Country: ${data.country}</li>
          <li>City: ${data.city}</li>
          <li>Time zone: ${data.timezone}</li>
          <li>Region: ${data.regionName}</li>
        </ul>
      `;
      
    output.innerHTML = "<pre>"+html+"</pre>";
    // output.innerHTML = "<pre>" + JSON.stringify(result,2,2)+ "</pre>";
    }

    catch (error) {
        console.error(error);
    }

}
