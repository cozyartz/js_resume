var bio = {
 "name" : "Andrea Cozart-Lundin",
 "role" : "Web Developer",
 "contacts" :  {
   "mobile" : "734-693-2020",
   "email" : "cozy2963@gmail.com",
   "github" : "cozy2963",
   "twitter" : "@cozy2963",
   "location" : "Detroit"
   },
 "welcomeMessage" : "Thanks for checking out my info!",
 "skills" : [
   "HTML", "CSS", "Ruby", "WordPress", "GitHub"
 ],
 "biopic" : "images/cozy.jpg"
}
 var education = {
   "schools" : [
     {
       "name" : "Schoolcraft College",
       "location" : "Livonia, MI",
       "degree" : "BS",
       "majors" : ["Aviation Management"],
       "dates" : "2013 - 2014",
       "url" : "http://www.schoolcraft.edu"
     },
     {
       "name" : "Baker College",
       "location" : "Auburn Hills, MI",
       "degree" : "AS",
       "majors" : ["Computer Science"],
       "dates" : "2006 - 2007",
       "url" : "http://www.baker.edu"
     }
   ],
   "onlineCourses" : [
     {
       "title" : "Front-end Web Develoment Nanodegree",
       "school" : "Udacity",
       "date" : "2016",
       "url" : "http://www.udacity.com"
     },
     {
       "title" : "Git Path",
       "school" : "Code School",
       "date" : "2015",
       "url" : "http://www.codeschool.com"
     },
     {
       "title" : "Complete Web Developer Bootcamp",
       "school" : "Udemy",
       "date" : "2015",
       "url" : "http://www.udemy.com/job-ready-web-developer"
     }
   ]
 }

 var work = {
   "jobs" : [
     {
     "employer" : "Lanier Brough",
     "title" : "Line-haul Driver",
     "location" : "Seattle, WA",
     "dates" : "2013 - 2016",
     "description" : "Hauled US mail with 53' trailer and Day-cab"
     },
     {
     "employer" : "Ruco Transport, LLC",
     "title" : "Class A CDL Driver / Owner",
     "location" : "Wayne, MI",
     "dates" : "2005 - 2013",
     "description" : "Expidited frieght within the US and Canada"
   },
   {
     "employer" : "Apple, Inc.",
     "title" : "Mac Specialist",
     "location" : "Novi, MI",
     "dates" : "2007 - 2008",
     "description" : "Provided excellent sales and service to everyone"
   }
   ]
 }

 var projects = {
   "projects" : [
     {
       "title" : "Portfolio Site",
       "dates" : "2016",
       "description" : "Personal Portfolio site",
       "images" : ["http://placehold.it/350x150"]
     },
     {
       "title" : "To-Do List",
       "dates" : "2015",
       "description" : "Simple To-Do list code-along with Colt Steele",
       "images" : ["images/meh.jpg", "images/fry.jpg"]
     }
   ]
 }


 function locationizer(work_obj) {
   var locationArray = [];

   for (job in work_obj.jobs) {
     var newLocation = work_obj.jobs[job].location;
     locationArray.push(newLocation);
   }
   return locationArray;
 }

 console.log(locationizer(work));
$("#mapDiv").append(googleMap);

////////////////////////////////projects/////////////////
 projects.display = function() {
   //for (project in projects.projects) {
   projects.projects.forEach(function(project) {
     console.log(project);
     $("#projects").append(HTMLprojectStart);

     var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
     $(".project-entry:last").append(formattedTitle);
     var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
     $(".project-entry:last").append(formattedDates);
     var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
     $(".project-entry:last").append(formattedDescription);

     if (project.images) {
       project.images.forEach(function(image) {
         var formattedImage = HTMLprojectImage.replace("%data%", image);
         $(".project-entry:last").append(formattedImage);
       });
     }
   });

 };
 projects.display();

 ////////////////////skills/bio/////////////////////////////

 bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRoll = HTMLheaderRole.replace("%data%", bio.role);
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").prepend(formattedPic);

  $("#header").prepend(formattedRoll);
  $("#header").prepend(formattedName);
  $("#header").append(HTMLskillsStart);
  // $("#skills").append(formattedSkill);

bio.skills.forEach(function(skill) {
  var formattedSkill = HTMLskills.replace("%data%", skill);
  console.log(skill);
  // for (skills in bio.skills) {
  // var formattedSkill = HTMLskills.replace("%data%", bio.skills);
  $("#skills").append(formattedSkill);
  });
bio.contacts.forEach(function(contact) {
  console.log(contact);
  var formattedMobile = HTMLmobile.replace("%data%", contact.mobile);
}

}
bio.display();

/////////////////work////////////////////////////////////

work.display = function() {
  work.jobs.forEach(function(job) {
    console.log(job);
    $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", job.job);
  var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates = HTMLworkDates.replace("%data%", job.dates);
  $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
  $(".work-entry:last").append(formattedDescription);

  });
}

displayWork();

//////////////////education///////////////////////////////
education.display = function() {
  education.schools.forEach(function(school) {
    var formatted
  }
}













// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });