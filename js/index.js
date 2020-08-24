  
  function addCourseSelector(){ // course overlay selector 1
    var newSelector = document.createElement("select");
    newSelector.innerHTML='<option id="ceng307">CENG307</option><option id="ceng310">CENG310</option><option id="ceng101">CENG101</option><option id="math101">MATH101</option><option id="engr404">ENGR404</option>'
    var a = document.getElementById("selectors1");
    var counter = a.querySelectorAll("select");
    if(counter.length > 4){
      alert("You can add up to 5 courses for a group");
    }
    else{
      document.getElementById("addingNewOverlap").appendChild(newSelector);
    }
  }
  function addCourseSelector2(){ // course overlay selector 2
    var newSelector = document.createElement("select");
    newSelector.innerHTML='<option id="ceng307">CENG307</option><option id="ceng310">CENG310</option><option id="ceng101">CENG101</option><option id="math101">MATH101</option><option id="engr404">ENGR404</option>'
    var a = document.getElementById("selectors2");
    var counter = a.querySelectorAll("select");
    if(counter.length > 4){
      alert("You can add up to 5 courses for a group");
    }
    else{
      document.getElementById("addingNewOverlap2").appendChild(newSelector);
    }
  }
  function addNewGroup(){// course overlap adding new group

    var newGroup = document.createElement("div");
    newGroup.className="row d-flex justify-content-center";
    newGroup.id ="selectors2";
    newGroup.innerHTML = '<button type="button" title="Delete Group" onclick="deleteGroup2()"'+
    'style="width:20px;height:25px;margin-top:5px;border:none;background-color: white;">'+
      '<i class="fa fa-times" style="color:#c9302c;"></i>'+
  '</button>'+
    '<select><option id="ceng307">CENG307</option>'+
     '<option id="ceng310">CENG310</option>'+
     '<option id="ceng101">CENG101</option>'+
     '<option id="math101">MATH101</option>'+
    '<option id="engr404">ENGR404</option>'+
  '</select>'+
  '<select style="margin-right:25px;">'+
     '<option id="ceng307">CENG307</option>'+
     '<option id="ceng310">CENG310</option>'+
     '<option id="ceng101">CENG101</option>'+
     '<option id="math101">MATH101</option>'+
    '<option id="engr404">ENGR404</option>'+
  '</select>'+
   '<div class="row" id="addingNewOverlap2"></div>'+       
     '<button type="button" class="btn btn-success" onclick="addCourseSelector2()" title="Add new select box"'+
     'style="border-radius:50% !important;width:30px;height:30px;margin-top:3px;margin-left:20px;">'+
     '<i class="fa fa-plus" style="font-size:20px !important;margin-left:-5px !important;"></i></button>' 
     +'<button type="button" class="btn btn-danger" onclick="deleteCourseSelector2()" title="Delete last select box"'+
     'style="border-radius:50% !important;width:30px;height:30px;margin-top:3px;margin-left:20px;">'+
     '<i class="fa fa-minus" style="font-size:20px !important;margin-left:-5px !important;"></i></button>'   
   document.getElementById("addingNewGroup").appendChild(newGroup);
 }
 function deleteGroup(){ //course overlap deleting group
     var del = document.getElementById("selectors1");
     del.parentNode.removeChild(del);
 }
 function deleteGroup2(){ //course overlap deleting group
     var del = document.getElementById("selectors2");
    del.parentNode.removeChild(del);
}
 function deleteCourseSelector1(){  //course overlap deleting selector
        var a = document.getElementById("selectors1");
        var deleteCourse = a.querySelectorAll("select");
       if(deleteCourse.length<3){
         alert("You must select at least two courses for a group.");
       }
       else{
        deleteCourse[deleteCourse.length-1].parentNode.removeChild(deleteCourse[deleteCourse.length-1]);
       }
        
 }
 function deleteCourseSelector2(){   //course overlap deleting selector
  var a = document.getElementById("selectors2");
  var deleteCourse = a.querySelectorAll("select");
 if(deleteCourse.length<3){
   alert("You must select at least two courses for a group.");
 }
 else{
  deleteCourse[deleteCourse.length-1].parentNode.removeChild(deleteCourse[deleteCourse.length-1]);
 }
  
}

 function addNewLesson(){ //dividing Lessons adding new group

    var newLesson = document.createElement("div");
    newLesson.className = "row";
    newLesson.innerHTML = '<select class="dividing-courses"><option id="ceng307">CENG307</option>'+
        '<option id="ceng310">CENG310</option>'+
        '<option id="ceng101">CENG101</option>'+
        '<option id="math101">MATH101</option>'+
        '<option id="engr404">ENGR404</option>'+
        '</select>'+
        '<input type="number" style="height:35px;width:70px;">'+
        '<button type="button" title="Delete Group" onclick="deleteDivideGroup2()"'+
        'style="width:20px;height:25px;margin-top:5px;border:none;background-color: white;margin-left:10px;">'+
          '<i class="fa fa-times" style="color:#c9302c;"></i>'+
         '</button>'

   document.getElementById("newLesson2").appendChild(newLesson);
 }
 
 function deleteDivideGroup1(){ // dividing lesson delete 
  var del = document.getElementById("newLesson1");
  del.parentNode.removeChild(del);
 }
 function deleteDivideGroup2(){ // dividing lesson delete 
  var del = document.getElementById("newLesson2");
  del.parentNode.removeChild(del);
 }

 function edit1(){ //check infos edit button
    var saveBtn = document.getElementById("save-btn1");
    var deleteBtn = document.getElementById("delete-btn1");
    var editBtn = document.getElementById("edit-btn1");
    var courseName = document.getElementById("course-input1");
    var courseCode = document.getElementById("code-input1");
    var grade = document.getElementById("grade-input1");
    var projection1 = document.getElementById("projection-input11");
    var projection2 = document.getElementById("projection-input12");
    var labType = document.getElementById("lab-input1");

    if(saveBtn.style.display == "none"){
      editBtn.style.display = "none";
      deleteBtn.style.display = "block";
      saveBtn.style.display = "block";
      courseName.disabled = false;
      courseCode.disabled = false;
      grade.disabled = false;
      projection1.disabled = false;
      projection2.disabled = false;
      labType.disabled = false;
    }     
    else{
      editBtn.style.display = "block";
      deleteBtn.style.display = "none";
      saveBtn.style.display = "none";
      courseName.disabled = true;
      courseCode.disabled = true;
      grade.disabled = true;
      projection1.disabled = true;
      projection2.disabled = true;
      labType.disabled = true;
    }   
  }
  function edit2(){
    var saveBtn = document.getElementById("save-btn2");
    var deleteBtn = document.getElementById("delete-btn2");
    var editBtn = document.getElementById("edit-btn2");
    var courseName = document.getElementById("course-input2");
    var courseCode = document.getElementById("code-input2");
    var grade = document.getElementById("grade-input2");
    var projection1 = document.getElementById("projection-input21");
    var projection2 = document.getElementById("projection-input22");
    var labType = document.getElementById("lab-input2");

    if(saveBtn.style.display == "none"){
      editBtn.style.display = "none";
      deleteBtn.style.display = "block";
      saveBtn.style.display = "block";
      courseName.disabled = false;
      courseCode.disabled = false;
      grade.disabled = false;
      projection1.disabled = false;
      projection2.disabled = false;
      labType.disabled = false;
    }     
    else{
      editBtn.style.display = "block";
      deleteBtn.style.display = "none";
      saveBtn.style.display = "none";
      courseName.disabled = true;
      courseCode.disabled = true;
      grade.disabled = true;
      projection1.disabled = true;
      projection2.disabled = true;
      labType.disabled = true;
  
    }   
  }
  function edit3(){
    var saveBtn = document.getElementById("save-btn3");
    var deleteBtn = document.getElementById("delete-btn3");
    var editBtn = document.getElementById("edit-btn3");
    var courseName = document.getElementById("course-input3");
    var courseCode = document.getElementById("code-input3");
    var grade = document.getElementById("grade-input3");
    var projection1 = document.getElementById("projection-input31");
    var projection2 = document.getElementById("projection-input32");
    var labType = document.getElementById("lab-input3");

    if(saveBtn.style.display == "none"){
      editBtn.style.display = "none";
      deleteBtn.style.display = "block";
      saveBtn.style.display = "block";
      courseName.disabled = false;
      courseCode.disabled = false;
      grade.disabled = false;
      projection1.disabled = false;
      projection2.disabled = false;
      labType.disabled = false;
    }     
    else{
      editBtn.style.display = "block";
      deleteBtn.style.display = "none";
      saveBtn.style.display = "none";
      courseName.disabled = true;
      courseCode.disabled = true;
      grade.disabled = true;
      projection1.disabled = true;
      projection2.disabled = true;
      labType.disabled = true;
  
    }   
  }

  function deleteCheckCourse1(){
      var delCourse = document.getElementById("course1");
      console.log(delCourse.parentNode);
      delCourse.parentNode.remove(delCourse.parentNode);
  }
  function deleteCheckCourse2(){
    var delCourse = document.getElementById("course2");
    console.log(delCourse.parentNode);
    delCourse.parentNode.remove(delCourse.parentNode);
}
function deleteCheckCourse3(){
  var delCourse = document.getElementById("course3");
  console.log(delCourse.parentNode);
  delCourse.parentNode.remove(delCourse.parentNode);
}

  