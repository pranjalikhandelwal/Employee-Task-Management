// Add new Task into Data based through alert box
// API - `/task/addtask/${task_title}`
document.getElementById('addmytask').addEventListener('click',function(){
    swal("Add New Task here:", {
        content: "input",
    }).then((task_title) => {
        if(task_title){
            fetch(`/task/addtask/${task_title}`).then((data)=>{
                swal({
                    title: "Good job!",
                    text: "You Added a Task!",
                    icon: "success",
                    button: "Ok !",
                }).then((btn)=>{
                    if(btn){
                      window.location.reload();

                    }
                    let taskBox = document.querySelector('.task-box')
                    taskBox.scrollTop = taskBox.scrollHeight
                })  
            }).catch((error)=>{ console.log(`Error : ${error}`) })    
        }
        else {  swal("Can't Set Task Empty !");  }
    })
 })
        


// Select each task for delete - API - `task/delete/${task_id}`
let allDeleteTask = document.querySelectorAll('.deletemytask')
allDeleteTask.forEach(function(eachtask){
    eachtask.addEventListener('click',function(){
        let task_id = eachtask.getAttribute('data-id')
        swal({
            title: "Are you sure?",
            text: "Once deleted, It will added into Task History!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }) 
        .then((willDelete) => {
            // IF User want to delete Task
             if (willDelete) {
                 fetch(`task/delete/${task_id}`)
                 .then(()=>{
                            swal("Your Task has been Compelted !", {
                                icon: "success",
                            }).then(() => {
                                window.location.reload();
                            })
                       console.log('Data deleted');
                 }).catch((error)=>{ console.error(error);  })
                } else {  swal("Your Task is safe!"); }
            });
    })    
})

// Based on Country show states
function showStates(countryID) {
    let selectState = document.getElementById('states')
    selectState.innerHTML=''
    fetch(`/country/${countryID}`)
    .then((response)=>{
        return response.json()
    }).then(states=>{       
        for(state of states){
            let option = document.createElement('option')
            option.setAttribute('value', state._id)
            option.innerHTML = state.stateName
            selectState.appendChild(option)
        }
    })
}

// Based on States show Cities
function showCities(stateID) {
    let selectCity = document.getElementById('cities')
    selectCity.innerHTML = ''
    fetch(`/country/cities/${stateID}`)
        .then((response) => {
            return response.json()
        }).then(cities => {
            for (city of cities) {
                let option = document.createElement('option')
                option.setAttribute('value', city._id)
                option.innerHTML = city.cityName
                selectCity.appendChild(option)
            }
       })
}