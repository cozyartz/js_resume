var name = "Andrea Cozart-Lundin";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRoll = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRoll);
$("#header").prepend(formattedName);


 var bio = {
  "name" : "Andrea Cozart-Lundin",
  "job" : "Web Developer",
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
  "bioPic" : "images/cozy.jpg"
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

if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
  // formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  // $("#skills").append(formattedSkill);
};

function displayWork() {
// Employment
for(job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  // var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  // $(".work-entry:last").append(formattedLocation);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

  }
}

displayWork();
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedPic);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}

console.log(locationizer(work));

// function inName(name) {
//   name = name.trim().split(" ");
//   console.log(name);
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
//    return name[0] + " " + name[1];
// }
//
// $('#main').append(internationalizeButton);

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();

$("#mapDiv").append(googleMap);
