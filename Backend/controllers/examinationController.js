const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

var mysql = require("mysql");
// <<<<<<< HEAD
// var connection = mysql.createPool({
//   connectionLimit: 10,
//   host: "sql238.main-hosting.eu",
//   user: "u117929562_ucscExrmsUser",
//   password: "lT:@>w0y4",
//   database: "u117929562_ucscEXRMS",
// });

// =======
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "u117929562_ucscexrms",
// });

// connection.connect();

var connection = mysql.createPool({
  connectionLimit: 10,
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});
//>>>>>>> afa16db780afed1121374c6ae103cf345c7bd7c8

const getExaminationCourses = asyncHandler(async (req, res) => {
  const lecturer_id = parseInt(req.params.id);

  console.log("courses");

  const courses = [];

  connection.query(
    `SELECT DISTINCT course.*,course_exam_question.lecturer_id_for_first_marking,course_exam_question.lecturer_id_for_second_marking from course_exam_question, course WHERE course.course_id = course_exam_question.course_id AND lecturer_id_for_first_marking = "${lecturer_id}" OR lecturer_id_for_second_marking = "${lecturer_id}"`,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );

  // const courses = await findMany({
  //     where: {
  //         course_id : course.course_id
  //     }
  // })
});

const getExaminationQuestion = asyncHandler(async (req, res) => {
  const lecturer_id = parseInt(req.params.id1);
  const course_id = parseInt(req.params.id2);

  connection.query(
    `SELECT DISTINCT course_exam_question.question_number,course_exam_question.question_id,course_exam_question.contribution from course_exam_question, course WHERE course.course_id = course_exam_question.course_id AND course_exam_question.course_id = ${course_id} AND lecturer_id_for_first_marking = "${lecturer_id}" OR lecturer_id_for_second_marking = "${lecturer_id}"`,
    function (error, results, fields) {
      if (error) throw error;
      //console.log(results);
      res.json(results);
    }
  );
});

const getDistinctIndex = asyncHandler(async (req, res) => {
  // const  = parseInt(req.params.id1);
  const course_id = parseInt(req.params.id);

  connection.query(
    `SELECT DISTINCT marks.index_number FROM marks,course_exam_question WHERE course_exam_question.question_id = marks.question_id AND course_exam_question.course_id = ${course_id}`,
    function (error, results, fields) {
      if (error) throw error;
      //console.log(results);
      res.json(results);
    }
  );
});

const getMarksFromIndex = asyncHandler(async (req, res) => {
  // const  = parseInt(req.params.id1);
  const course_id = parseInt(req.params.id1);
  const index_number = parseInt(req.params.id2);

  connection.query(
    `SELECT marks.* FROM marks,course_exam_question WHERE marks.question_id = course_exam_question.question_id AND marks.index_number = ${index_number} AND course_exam_question.course_id = ${course_id}`,
    function (error, results, fields) {
      if (error) throw error;
      //console.log(results);
      res.json(results);
    }
  );
});

const getQuestionFromCourse = asyncHandler(async (req, res) => {
  // const  = parseInt(req.params.id1);
  const course_id = parseInt(req.params.id);
  // const index_number = parseInt(req.params.id2);

  console.log(course_id);

  connection.query(
    `SELECT question_id,question_number FROM course_exam_question WHERE course_id = ${course_id}`,
    function (error, results, fields) {
      if (error) throw error;
      //console.log(results);
      res.json(results);
    }
  );
});

const getIndexCourse = asyncHandler(async (req, res) => {
  // const  = parseInt(req.params.id1);
  const course_id = parseInt(req.params.id);
  // const index_number = parseInt(req.params.id2);

  console.log(course_id);

  connection.query(
    `SELECT index_no FROM student_course WHERE course_id = ${course_id}`,
    function (error, results, fields) {
      if (error) throw error;
      //console.log(results);
      res.json(results);
    }
  );
});

const examMarksAdd = asyncHandler(async (req, res) => {
  const data = req.body;
  console.log(data);
  var counter = 0;

  // console.log(course_id);
  connection.query(
    `SELECT * FROM course_exam_question WHERE course_id = ${data.course_id}`,
    async function (err, results) {
      if (err) throw err;
      counter = results.length;
      console.log(counter);
      // console.log(results.RowDataPacket.question_id);
      await data.dataMarks.map((row) => {
        console.log(row);
        results.map((ques) => {
          // counter++;
          var marks = `question_${ques.question_number}_marks`;
          connection.query(
            `SELECT * from marks WHERE index_number = ${row.index_number_of_students} AND question_id = ${ques.question_id}`,
            async function (err, results) {
              if (err) throw err;
              if (results.length == 0) {
                if (ques.question_number == 1) {
                  connection.query(
                    `INSERT INTO marks (index_number,question_id,marks_by_first_marker,marks_by_second_marker) VALUES 
                      ("${row.index_number_of_students}", "${ques.question_id}", "${row.question_1_marks}","${row.question_1_marks}")`,
                    async function (err, results) {
                      if (err) throw err;
                    }
                  );
                } else if (ques.question_number == 2) {
                  connection.query(
                    `INSERT INTO marks (index_number,question_id,marks_by_first_marker,marks_by_second_marker) VALUES 
                      ("${row.index_number_of_students}", "${ques.question_id}", "${row.question_2_marks}","${row.question_2_marks}")`,
                    async function (err, results) {
                      if (err) throw err;
                    }
                  );
                } else if (ques.question_number == 3) {
                  connection.query(
                    `INSERT INTO marks (index_number,question_id,marks_by_first_marker,marks_by_second_marker) VALUES 
                      ("${row.index_number_of_students}", "${ques.question_id}", "${row.question_3_marks}","${row.question_3_marks}")`,
                    async function (err, results) {
                      if (err) throw err;
                    }
                  );
                } else if (ques.question_number == 4) {
                  connection.query(
                    `INSERT INTO marks (index_number,question_id,marks_by_first_marker,marks_by_second_marker) VALUES 
                      ("${row.index_number_of_students}", "${ques.question_id}", "${row.question_4_marks}","${row.question_4_marks}")`,
                    async function (err, results) {
                      if (err) throw err;
                    }
                  );
                }
              } else {
                if (ques.question_number == 1) {
                  connection.query(
                    `UPDATE marks SET marks_by_first_marker = "${row.question_1_marks}", marks_by_second_marker = "${row.question_1_marks}" WHERE index_number = "${row.index_number_of_students}" AND question_id = "${ques.question_id}"`,
                    async function (err, results) {
                      if (err) throw err;
                    }
                  );
                } else if (ques.question_number == 2) {
                  connection.query(
                    `UPDATE marks SET marks_by_first_marker = "${row.question_2_marks}", marks_by_second_marker = "${row.question_2_marks}" WHERE index_number = "${row.index_number_of_students}" AND question_id = "${ques.question_id}"`,
                    async function (err, results) {
                      if (err) throw err;
                    }
                  );
                } else if (ques.question_number == 3) {
                  connection.query(
                    `UPDATE marks SET marks_by_first_marker = "${row.question_3_marks}", marks_by_second_marker = "${row.question_3_marks}" WHERE index_number = "${row.index_number_of_students}" AND question_id = "${ques.question_id}"`,
                    async function (err, results) {
                      if (err) throw err;
                    }
                  );
                } else if (ques.question_number == 4) {
                  connection.query(
                    `UPDATE marks SET marks_by_first_marker = "${row.question_4_marks}", marks_by_second_marker = "${row.question_4_marks}" WHERE index_number = "${row.index_number_of_students}" AND question_id = "${ques.question_id}"`,
                    async function (err, results) {
                      if (err) throw err;
                    }
                  );
                }
              }
            }
          );
        });
        if (counter == 4) {
          var totalMarks =
            row.question_1_marks +
            row.question_2_marks +
            row.question_3_marks +
            row.question_4_marks;
          console.log(totalMarks);

          connection.query(
            `SELECT mark_id from exam_mark WHERE index_no = ${row.index_number_of_students}`,
            function(error,results,fields){
              if(error) throw error;
              if(results.length == 0) {
                connection.query(
                  `INSERT INTO exam_mark (index_no,exam_marks,course_id) VALUES ("${row.index_number_of_students}","${totalMarks}","${data.course_id}")`
                ),function(error,results,fields){
                  if(error) throw error;
                }
              } else {
                connection.query(
                  `UPDATE exam_mark SET exam_marks=${totalMarks} WHERE index_no = ${row.index_number_of_students} AND course_id = ${data.course_id}`,
                  function(error,results,fields){
                    if(error) throw error;
                  }
                )
              }
            }
          )
          
        }
      });
    }
  );
  // await data.dataMarks.map(
  //   (row)=>{

  //   }
  // );

  // connection.query(
  //   `SELECT index_no FROM student_course WHERE course_id = ${course_id}`,
  //   function (error, results, fields) {
  //     if (error) throw error;
  //     //console.log(results);
  //     res.json(results);
  //   }
  // );
});

module.exports = {
  getExaminationCourses,
  getExaminationQuestion,
  getDistinctIndex,
  getMarksFromIndex,
  getQuestionFromCourse,
  getIndexCourse,
  examMarksAdd,
};
