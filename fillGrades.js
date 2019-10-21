(function() {
  var content = document.getElementById('FRAME_CONTENT').contentDocument;

  var scores = content.querySelectorAll("input.form-control[id$='txt_Score']");
  var comments = content.querySelectorAll("textarea.form-control[id$='txt_Notes']");

  var scoreBox = content.createElement('textarea');
  var commentBox = content.createElement('textarea');
  var processButton = content.createElement('button');
  processButton.innerHTML = 'Submit';

  processButton.addEventListener('click', function(event) {
    var raw_score = scoreBox.value.split("\n");
    var raw_comments = commentBox.value.split("\n");    

    if (raw_score.length === scores.length) {
      for(var i = 0; i < scores.length; i++) {
        scores[i].value = raw_score[i];
      }
    } else {
      console.error("Entered scores doesn't match the number of students");
    }

    
    if (comments.length === raw_comments.length) {
      for(var i = 0; i < comments.length; i++) {
        comments[i].value = raw_comments[i];
      }
    } else {
      console.log("Not enough comments found");
    }
  });

  content.body.appendChild(scoreBox);
  content.body.appendChild(commentBox);
  content.body.appendChild(processButton);
})()



