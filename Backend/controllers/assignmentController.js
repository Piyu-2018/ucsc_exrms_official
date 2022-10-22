// const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

// const { user, course, lecturer_courses, assignments } = new prismaClient();

var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "sql238.main-hosting.eu",
//   user: "u117929562_ucscExrmsUser",
//   password: "lT:@>w0y4",
//   database: "u117929562_ucscEXRMS",
// });

// connection.connect();

var connection = mysql.createPool({
  connectionLimit: 10,
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});

// const { user, course, lecturer_courses, assignments, student, mark } =
//   new PrismaClient();

const getCourses = asyncHandler(async (req, res) => {
  const user_id = parseInt(req.params.id);

  console.log("courses");

  const courses = [];

  connection.query(
    "SELECT lecturer_courses.*,course.* FROM user,lecturer_courses,course WHERE user.user_id = lecturer_courses.user_id AND course.course_id = lecturer_courses.course_id AND user.user_id =" +
      user_id,
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

const getAssign = asyncHandler(async (req, res) => {
  const course_id = parseInt(req.params.id1);
  const user_id = parseInt(req.params.id2);

  // console.log(user_id);

  connection.query(
    "SELECT * FROM assignments WHERE lecturer_id=" +
      user_id +
      " AND course_id=" +
      course_id,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const getUndergraduates = asyncHandler(async (req, res) => {
  const acYear = req.params.id1;
  const cuYear = req.params.id2;
  const degree_type = req.params.id3;

  const student = [];

  connection.query(
    "SELECT academic_year.* FROM academic_year WHERE academic_year.aca_year =" +
      '"' +
      acYear +
      '"' +
      "AND academic_year.current_year =" +
      '"' +
      cuYear +
      '"' +
      " AND academic_year.degree_type =" +
      '"' +
      degree_type +
      '"',
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const getResult = asyncHandler(async (req, res) => {
  const mark_id = req.params.id1;
  const year = req.params.id2;
  const semester = req.params.id3;
  const degree = req.params.id4;
  const course_name = req.params.id5;

  const mark = [];

  connection.query(
    "SELECT exam_mark.*,exam.*,exam_question_mark.* FROM exam,exam_mark,exam_question_mark WHERE exam_mark.mark_id = exam_question_mark.mark_id AND exam_mark.exam_sem_id = exam.exam_sem_id AND exam_mark.mark_id =" +
      '"' +
      mark_id +
      '"' +
      " AND exam_mark.degree =" +
      '"' +
      degree +
      '"' +
      " AND exam_mark.degree =" +
      '"' +
      degree +
      '"',
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const assignAdd = asyncHandler(async (req, res) => {
  const { name, description, contribution, lecturer_id, course_id } = req.body;

  const contribution1 = parseInt(contribution);
  const lecturer_id1 = parseInt(lecturer_id);
  const course_id1 = parseInt(course_id);

  connection.query(
    `INSERT INTO assignments (name,description,contribution,lecturer_id,course_id) VALUES ("${name}","${description}","${contribution1}","${lecturer_id1}","${course_id1}")`,
    function (error) {
      if (error) throw error;

      const returnData = {
        name: name,
        description: description,
        contribution: contribution1,
        lecturer_id: lecturer_id1,
        course_id: course_id1,
      };

      res.status(StatusCodes.CREATED).json(returnData);
    }
  );
});

// const assignAdd = asyncHandler(async (req, res) => {
//   const { name, description, contribution, lecturer_id, course_id } = req.body;

//   const contribution1 = parseInt(contribution);
//   const lecturer_id1 = parseInt(lecturer_id);
//   const course_id1 = parseInt(course_id);

//   console.log("AddAssign");

//   console.log(course_id);
//   console.log(typeof course_id);
//   console.log(course_id1);
//   console.log(typeof course_id1);

//   // console.log(req.body);
//   // const newUser = await assignments.create({
//   //   data: {
//   //     name,
//   //     description,
//   //     contribution: contribution1,
//   //     lecturer_id: lecturer_id1,
//   //     course_id: course_id1,
//   //   },
//   // });

//   const newUser = await assignments.create({
//     data: {
//       name: name,
//       description: description,
//       contribution: contribution1,
//       lecturer_id: lecturer_id1,
//       course_id: course_id1,
//     },
//   });

//   console.log("Hi");

//   const returnData = {
//     name: newUser.name,
//     description: newUser.description,
//     contribution: newUser.contribution,
//     lecturer_id: newUser.lecturer_id,
//     course_id: newUser.course_id,
//   };

//   res.status(StatusCodes.CREATED).json(returnData);
// });

const assignMarkAdd1 = asyncHandler(async (req, res) => {
  const data = req.body;
  var values = [];
  connection.query(
    `SELECT marks_assignment.*,assignments.course_id,assignments.contribution FROM marks_assignment,assignments WHERE marks_assignment.assignment_id = assignments.assignment_id AND marks_assignment.index_number = '${data.index_number}' AND marks_assignment.assignment_id=${data.assignment_id}`,
    function (err, results) {
      if (err) throw err;
      var contribution = results[0].contribution;
      var oldMarks = results[0].marks;
      if (results.length == 0) {
        console.log("where marks havent been added");
        connection.query(
          `INSERT INTO marks_assignment(index_number,marks,assignment_id) VALUES ("${data.index_number}","${data.marks}","${data.assignment_id}")`,
          function (err, results) {
            if (err) throw err;
            connection.query(
              `SELECT * FROM exam_mark WHERE index_no = ${data.index_number}`,
              function (error, results) {
                if (results.length == 0) {
                  var newMarks = (data.marks * contribution) / 100;
                  connection.query(
                    `INSERT INTO exam_mark(index_no,course_id,asignement_mark) VALUES ("${data.index_number}","${results[0].course_id}","${newMarks}") WHERE index_no=${data.index_number}`,
                    function (error, results) {
                      if (error) throw error;
                    }
                  );
                } else {
                  var newMarks =
                    results[0].assignment_mark +
                    (data.marks * contribution) / 100;
                  connection.query(
                    `UPDATE exam_mark SET assignment_mark = ${newMarks} WHERE index_no = ${data.index_number}`,
                    function (error, results) {
                      if (error) throw error;
                    }
                  );
                }
              }
            );
          }
        );
      } else {
        connection.query(
          `UPDATE marks_assignment SET marks=${data.marks},assignment_id=${data.assignment_id} WHERE marks!='${data.marks}' AND index_number=${data.index_number}`,
          function(err,results){
            if(err) throw err;
            connection.query(
              `SELECT * FROM exam_mark WHERE index_no = ${data.index_number}`,
              function(error,results){
                if (results.length == 0) {
                  var newMarks =
                    (data.marks * contribution) / 100 -
                    (oldMarks * contribution) / 100;
                  console.log(newMarks);
                  connection.query(
                    `INSERT INTO exam_mark(index_no,course_id,asignement_mark) VALUES ("${data.index_number}","${results[0].course_id}","${newMarks}") WHERE index_no=${data.index_number}`,
                    function (error, results) {
                      if (error) throw error;
                    }
                  );
                } else {
                  var newMarks =
                        results[0].assignment_mark +
                        (data.marks * contribution) / 100 -
                        (oldMarks * contribution) / 100;
                      console.log(newMarks);
                      connection.query(
                        `UPDATE exam_mark SET assignment_mark = "${newMarks}" WHERE index_no = ${data.index_number}`,
                        function (error, results) {
                          if (error) throw error;
                        }
                      );
                }
              }
            )
          }
        )
      }
    }
  );
});

const assignMarkAdd = asyncHandler(async (req, res) => {
  const data = req.body;
  console.log(data.assignment_id);
  var values = [];
  var sql =
    "INSERT INTO marks_assignment(index_number,marks,assignment_id) VALUES (?)";

  await data.dataMarks.map((row) => {
    connection.query(
      `SELECT marks_assignment.*,assignments.course_id,assignments.contribution FROM marks_assignment,assignments WHERE marks_assignment.assignment_id = assignments.assignment_id AND marks_assignment.index_number = '${row.index_number}' AND marks_assignment.assignment_id=${data.assignment_id}`,
      function (err, results) {
        if (err) throw err;
        var contribution = results[0].contribution;
        var oldMarks = results[0].marks;
        // res.json(results);
        if (results.length == 0) {
          console.log("where marks havent been added");
          values = [row.index_number, row.marks, data.assignment_id];
          console.log(values);
          connection.query(sql, [values], function (err) {
            if (err) throw err;
            connection.query(
              `SELECT * FROM exam_mark WHERE index_no = ${row.index_number}`,
              function (error, results) {
                if (results.length == 0) {
                  var newMarks = (row.marks * contribution) / 100;
                  connection.query(
                    `INSERT INTO exam_mark(index_no,course_id,asignement_mark) VALUES ("${row.index_number}","${results[0].course_id}","${row.marks}*${results[0].contribution}/100") WHERE index_no=${row.index_number}`,
                    function (error, results) {
                      if (error) throw error;
                    }
                  );
                } else {
                  var newMarks =
                    results[0].assignment_mark +
                    (row.marks * contribution) / 100;
                  connection.query(
                    `UPDATE exam_mark SET assignment_mark = ${newMarks} WHERE index_no = ${row.index_number}`,
                    function (error, results) {
                      if (error) throw error;
                    }
                  );
                }
              }
            );
            // connection.query(`UPDATE exam_mark SET assignment_mark = ${}`)
            // res.json(results);
            // connection.end();
          });
        } else {
          connection.query(
            `UPDATE marks_assignment SET marks=${row.marks},assignment_id=${data.assignment_id} WHERE marks!='${row.marks}' AND index_number=${row.index_number}`,
            function (err, results) {
              if (err) throw err;
              connection.query(
                `SELECT * FROM exam_mark WHERE index_no = ${row.index_number}`,
                function (error, results) {
                  if (results.length == 0) {
                    var newMarks =
                      (row.marks * contribution) / 100 -
                      (oldMarks * contribution) / 100;
                    console.log(newMarks);
                    connection.query(
                      `INSERT INTO exam_mark(index_no,course_id,asignement_mark) VALUES ("${row.index_number}","${results[0].course_id}","${newMarks}") WHERE index_no=${row.index_number}`,
                      function (error, results) {
                        if (error) throw error;
                      }
                    );
                  } else {
                    // console.log(results.RowDataPacket[0].assignment_mark);
                    var newMarks =
                      results[0].assignment_mark +
                      (row.marks * contribution) / 100 -
                      (oldMarks * contribution) / 100;
                    console.log(newMarks);
                    connection.query(
                      `UPDATE exam_mark SET assignment_mark = "${newMarks}" WHERE index_no = ${row.index_number}`,
                      function (error, results) {
                        if (error) throw error;
                      }
                    );
                  }
                }
              );
              // res.json(results);
            }
          );
        }
      }
    );
    // connection.query(`SELECT * FROM marks_assignment WHERE index_number = '${row.index_number}' AND marks!='${row.marks}'`,
    // function (err,results){
    //   if(err) throw err;
    //   if(results.length > 0){

    //   }
    // }

    // );
  });

  // await connection.query(
  //   `INSERT INTO marks_assignment(index_number,marks,assignment_id) VALUES (${row.index_number},${row.marks},${data.assignment_id})`,
  //   function (error, results, fields) {
  //     if (error) throw error;

  //     res.json(results);\

  //     connection.end();
  //   })

  // connection.query(sql,[values],function(err){
  //   if(err) throw err;
  //   // connection.end();
  // })
  console.log("Hi");
  console.log(values);
});

const getAssignMarks = asyncHandler(async (req, res) => {
  // const data = req.body;
  console.log("HI");
  const assignment_id = req.params.id;
  var values = [];
  var sql = `SELECT user.f_name,user.l_name,marks_assignment.* FROM user,student,marks_assignment WHERE marks_assignment.index_number = student.index_no AND student.user_id = user.user_id AND marks_assignment.assignment_id = "${assignment_id}"`;

  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json(results);
  });
  // await connection.query(
  //   `INSERT INTO marks_assignment(index_number,marks,assignment_id) VALUES (${row.index_number},${row.marks},${data.assignment_id})`,
  //   function (error, results, fields) {
  //     if (error) throw error;

  //     res.json(results);\

  //     connection.end();
  //   })

  // connection.query(sql,[values],function(err){
  //   if(err) throw err;
  //   // connection.end();
  // })
});

const getIndexAssign = asyncHandler(async (req, res) => {
  // const  = parseInt(req.params.id1);
  const assignment_id = parseInt(req.params.id);

  connection.query(
    `SELECT student_course.index_no FROM student_course,assignments WHERE assignments.course_id = student_course.course_id AND assignments.assignment_id = ${assignment_id}`,
    function (error, results, fields) {
      if (error) throw error;
      //console.log(results);
      res.json(results);
    }
  );
});

module.exports = {
  getCourses,
  getAssign,
  getUndergraduates,
  getResult,
  assignAdd,
  assignMarkAdd,
  getAssignMarks,
  getIndexAssign,
  assignMarkAdd1,
};
