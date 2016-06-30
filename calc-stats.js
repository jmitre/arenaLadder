function countClass(classId, ladder){
  return ladder.reduce(function(acc, curr){
    if(curr.classId === classId){
      return acc + 1;
    }
    else {
      return acc;
    }
  }, 0);
}

function percOfClass(classId, ladder) {
  return Math.round((countClass(classId, ladder) / ladder.length) * 100) / 100;
}

function percOfClasses(ladder){
  var percentages = [];
  for(var i = 0; i < 12; i++){
    percentages.push(percOfClass(i + 1, ladder));
  }
  return percentages;
}

// function convert(stats, classes){
//   return stats.reduce(function(acc, curr, index){
//     class
//   }, {});
// }

var calcStats = {
  countClass,
  percOfClass,
  percOfClasses
};
