let projectTitle = document.getElementById("project-title")
let projectLink = document.getElementById("project-link")
let projectDesc = document.getElementById("project-desc")
let addBtn = document.getElementById("add-btn")

addBtn.addEventListener('click', async()=>{
    var key = firebase.database().ref("projects").push().key;
    
    let projectObj={
        "projectTitle":projectTitle.value,
        "projectLink":projectLink.value,
        "projectDesc": projectDesc.value
    }

    await firebase.database().ref("projects").child(key).set(projectObj);

    alert("Project Saved in Database...");
})


