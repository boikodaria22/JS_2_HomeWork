function showStudentsFavoriteLessons() {
  var lessons = ['Математика', 'История', 'Спорт', 'Литература', 'Биология', 'География'];

  function checkStudentFavoriteLessons(nameStudent, arr) {
    var n = Math.floor(Math.random() * (arr.length - 1));
    var favoriteLesson = arr.slice(arr.length - n);
    if (favoriteLesson.length > 0) {
      return `${nameStudent}: ${favoriteLesson.join(', ')}`;
    } else {
      return `${nameStudent}: У этого студента нет любимых предметов`;
    }
  }
  for (var i = 0; i < arguments.length; i++) {
    var listOfFavoriteLessons = checkStudentFavoriteLessons(arguments[i], lessons);
    console.log(listOfFavoriteLessons);
  }
}
showStudentsFavoriteLessons('Артур', 'Женя', 'Костя', 'Маша', 'Денис');
