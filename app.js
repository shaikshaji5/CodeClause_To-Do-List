function addtask(){
    var task=document.getElementById("inp").value;
    document.getElementById("temp").innerText="";
    if (task === ""){
        var task=document.getElementById("inp");
        task.placeholder='Enter something here';
        task.style.animation="shake 1s ease";

        task.value="";
        // window.alert("Sdf");
        // $("#inp").attr('placeholder','Some New Text 1');
        // task.value="wrong"
    }
    else{
        
        let div=document.createElement('div');
        div.setAttribute("contentEditable","true");
        let done=document.createElement('button');
        let remove=document.createElement('button');

        div.innerText=task;
        div.classList.add("taskdiv");


        done.innerText="✓";
        done.classList.add("done");

       
        done.addEventListener('click',function(){
            x.removeChild(done);
            document.getElementById("donelist").appendChild(x);
        })


        remove.innerText="✕";
        remove.classList.add("remove");
        remove.addEventListener('click', function() {
            div.remove();
          });



        div.appendChild(done);
        div.appendChild(remove);
        var x=document.getElementById("ret_box").appendChild(div);

        

        // add to done list 

        document.getElementById("inp").value="";
        
    }
}
function show(){
    window.alert("dfgujnbvfe");
}
function addsug(obj){
    var task=obj.innerHTML;
    document.getElementById("temp").innerText="";


    let div=document.createElement('div');
        let done=document.createElement('button');
        let remove=document.createElement('button');

        div.innerText=task;
        div.classList.add("taskdiv");


        done.innerText="✓";
        done.classList.add("done");

        // add to done list 
       
        done.addEventListener('click',function(){
            x.removeChild(done);
            document.getElementById("donelist").appendChild(x);
        })


        remove.innerText="✕";
        remove.classList.add("remove");
        remove.addEventListener('click', function() {
            div.remove();
          });



        div.appendChild(done);
        div.appendChild(remove);
        var x=document.getElementById("ret_box").appendChild(div);

        


        document.getElementById("inp").value="";
        
    
}