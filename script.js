//COUNTRY API  -- XMLHTTP
/*
var xhr = new XMLHttpRequest();

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        let data = JSON.parse(this.response);
        //console.log(data);
        for(let x of data){
            console.log(`
                Country name : ${x.name}
                Country sub-region: ${x.subregion}
                Country population :${x.population}
            `)
        }
    }else{
        console.log("Data not found");
    }
};
*/

//CHECKING IF TWO json objects are same even if in different order
//USING LODASH -includes lodash.js in index.html also








//////////////////








//


/*


    //combine 2 array and sort them
    var friends1 = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
        var friends2 = [
        "Gabbar",
        "Rajinikanth",
        "Mass",
        "Spiderman",
        "Jeff",
        "ET"
        ];
        function dataHandling3(input1,input2){
            input1= input1.concat(input2);
            input1 = input1.sort()
            return input1;
        }
       var friends =  dataHandling3(friends1,friends2);
       console.log(friends);

       console.log(`
       
       first item: ${friends[0]} 
       Middle item: ${friends[Math.floor(friends.length/2)]}
       last item: ${friends[friends.length-1]}
       `)

       //adding elements to end and beginning of array
       friends.push("Sivani");
       friends.unshift("Ash");
       console.log(friends)

       // adding Mr. to all names 
       for(let x in friends){
           friends[x] = "Mr."+friends[x];
       }
       console.log(friends)

       //comcat all name with comma(,)
       console.log(friends.join(","));

       //retrurn list of names which ha 'a'
       let arr=[];
        for(let x of friends){
            if(x.indexOf('a')!=-1 || x.indexOf('A')!=-1){
                arr.push(x);
            }
        }
        console.log(arr)

        //Average length of friends name:
        let len=0;
        friends.forEach(x => len+=x.length);
        let avg =parseInt( len/friends.length);
        console.log(avg)


*///

//

let count=0;

let ran;
//so that ran is not 0
while(true){
    ran = Math.floor(Math.random()*10);
    if(ran!=0){
        break;
    }
}
//ran*100 is max limit of number to guess
//setting limit in html page
//limit changes everytime page loads
document.querySelector("#limit").textContent=ran*100;
let num = Math.floor(Math.random()*(ran*100));


console.log(ran,num);
let checkguess = () => {
    count++;
    console.log("checking",count);
    let ans = document.querySelector("#text-box").value.trim();
    if( ans==""){
        // count when textbox is empty
        count--;
        alert("enter any number");
    }else if(isNaN(Number(ans))){
        //no count when it is not number
        count--;
        alert("only numbers are allowed");
        document.querySelector("#text-box").value="";
    }else{
        document.querySelector("#prevtext").style.display="block";
        if(ans>num){
            // document.querySelector("#prevnum").textContent=ans + " --> try smaller number";
            document.querySelector("#prevnum").textContent=ans;
            document.querySelector("#text-box").value="";
            alert("Try some smaller number");
        }else if(ans<num){
            // document.querySelector("#prevnum").textContent=ans + "--> try bigger number";
            document.querySelector("#prevnum").textContent=ans
            document.querySelector("#text-box").value="";
            alert("Try some bigger number")
        }else{

            alert("Congratulations you have found the correct answer in "+count+" attempts");
            count--;

        }
        // document.querySelector("#prevnum").textContent=ans;
        // document.querySelector("#prevtext").style.display="block";
        
    }
    //console.log(ans);
}