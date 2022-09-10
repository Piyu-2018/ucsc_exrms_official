-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2022 at 09:42 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u117929562_ucscexrms`
--

-- --------------------------------------------------------

--
-- Table structure for table `academic_year`
--

CREATE TABLE `academic_year` (
  `ac_year_ID` int(11) NOT NULL,
  `current_year` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aca_year` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_of_stu` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nic` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_no_m` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_no_l` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `student_temp_no` int(11) NOT NULL,
  `index_no` int(11) NOT NULL,
  `reg_no` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `degree_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_of_bank` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_date` date NOT NULL,
  `payment_image` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `academic_year`
--

INSERT INTO `academic_year` (`ac_year_ID`, `current_year`, `aca_year`, `email`, `title_of_stu`, `fName`, `lName`, `nic`, `contact_no_m`, `contact_no_l`, `student_temp_no`, `index_no`, `reg_no`, `degree_type`, `name_of_bank`, `payment_date`, `payment_image`) VALUES
(1, 'First Year', 'Academic Year - 2021-2022', '', '', 'Piyumi', 'Rathnayaka', '', '', '', 21000141, 21001381, '2021/CS/138', 'Information System (Bsc)', '', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Table structure for table `admission`
--

CREATE TABLE `admission` (
  `admission_id` int(11) NOT NULL,
  `exam_hall` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `exan_date` date NOT NULL,
  `exam_time` datetime NOT NULL,
  `attendence_verify` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `annou_id` int(11) NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `admin_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `assignment_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contribution` int(11) NOT NULL,
  `lecturer_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `assignments`
--

INSERT INTO `assignments` (`assignment_id`, `name`, `description`, `contribution`, `lecturer_id`, `course_id`) VALUES
(1, 'Assignment 1', 'Group Assignment presentation', 20, 3, 1),
(3, 'Assignment 2', 'Review Paper Writing', 20, 3, 1),
(4, 'Assignment 3', 'Coding Review', 20, 3, 1),
(19, 'Assignment 4', 'Coding Assignment 1', 5, 3, 1),
(20, 'Assignmetn 5', 'Q and A', 10, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `assign_marks`
--

CREATE TABLE `assign_marks` (
  `assigment_id` int(11) NOT NULL,
  `sub_marks` int(11) NOT NULL,
  `total_marks` int(11) NOT NULL,
  `assign_precentage` int(11) NOT NULL,
  `mark_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `index_no` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `lecture_id` int(11) NOT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `message_from` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message_to` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `confirm`
--

CREATE TABLE `confirm` (
  `confirm_id` int(11) NOT NULL,
  `letter_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `semester` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lecture_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ac_year_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `year`, `semester`, `course_name`, `course_code`, `lecture_name`, `ac_year_ID`) VALUES
(1, 3, '1', 'Machine Learning and Neural Computing', 'SCS3201', 'ml', 2022),
(2, 3, '1', 'Middleware Architecture', 'SCS3203', 'ma', 2022);

-- --------------------------------------------------------

--
-- Table structure for table `course_exam_question`
--

CREATE TABLE `course_exam_question` (
  `question_id` int(10) NOT NULL,
  `question_number` int(10) NOT NULL,
  `course_id` int(10) NOT NULL,
  `lecturer_id_for_first_marking` int(10) NOT NULL,
  `lecturer_id_for_second_marking` int(10) NOT NULL,
  `contribution` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course_exam_question`
--

INSERT INTO `course_exam_question` (`question_id`, `question_number`, `course_id`, `lecturer_id_for_first_marking`, `lecturer_id_for_second_marking`, `contribution`) VALUES
(1, 1, 1, 3, 2, 25),
(2, 2, 1, 3, 2, 25),
(3, 3, 1, 3, 2, 25),
(4, 4, 1, 3, 2, 25),
(5, 1, 2, 3, 2, 25),
(6, 2, 2, 3, 2, 25),
(7, 3, 2, 3, 2, 25),
(8, 4, 2, 3, 2, 25);

-- --------------------------------------------------------

--
-- Table structure for table `director`
--

CREATE TABLE `director` (
  `director_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `exam_sem_id` int(11) NOT NULL,
  `semester` int(11) NOT NULL,
  `year` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `exam`
--

INSERT INTO `exam` (`exam_sem_id`, `semester`, `year`) VALUES
(1, 2, '1st Year');

-- --------------------------------------------------------

--
-- Table structure for table `exam_admission_stu`
--

CREATE TABLE `exam_admission_stu` (
  `index_no` int(11) NOT NULL,
  `admission_id` int(11) NOT NULL,
  `exam_sem_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exam_mark`
--

CREATE TABLE `exam_mark` (
  `mark_id` int(11) NOT NULL,
  `academic_yr` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `degree` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_mark` int(11) NOT NULL,
  `assignment_mark` int(11) NOT NULL,
  `grade` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_mark` int(11) NOT NULL,
  `director_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `head_of_exam_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sar_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `exam_sem_id` int(11) NOT NULL,
  `director_id` int(11) NOT NULL,
  `head_of_exam_id` int(11) NOT NULL,
  `sar_id` int(11) NOT NULL,
  `index_no` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `exam_mark`
--

INSERT INTO `exam_mark` (`mark_id`, `academic_yr`, `degree`, `course_name`, `sub_mark`, `assignment_mark`, `grade`, `total_mark`, `director_status`, `head_of_exam_status`, `sar_status`, `exam_sem_id`, `director_id`, `head_of_exam_id`, `sar_id`, `index_no`) VALUES
(1, '2020/2021', 'Computer Science (Bsc)\r\n', 'Software Quality Assurance', 70, 80, 'A', 85, 'Approved', 'Approved', 'Released', 1, 1, 1, 1, 19020945);

-- --------------------------------------------------------

--
-- Table structure for table `exam_question_mark`
--

CREATE TABLE `exam_question_mark` (
  `question_id` int(11) NOT NULL,
  `mark_id` int(11) NOT NULL,
  `q1` int(11) NOT NULL,
  `q2` int(11) NOT NULL,
  `q3` int(11) NOT NULL,
  `q4` int(11) NOT NULL,
  `q5` int(11) NOT NULL,
  `q6` int(11) NOT NULL,
  `q7` int(11) NOT NULL,
  `q8` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `exam_question_mark`
--

INSERT INTO `exam_question_mark` (`question_id`, `mark_id`, `q1`, `q2`, `q3`, `q4`, `q5`, `q6`, `q7`, `q8`) VALUES
(1, 1, 20, 23, 19, 22, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `exam_timetable`
--

CREATE TABLE `exam_timetable` (
  `timetable_id` int(11) NOT NULL,
  `exam_date` date NOT NULL,
  `exam_time` datetime NOT NULL,
  `course_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `exam_sem_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `head_of_exam_board`
--

CREATE TABLE `head_of_exam_board` (
  `head_of_exam_ID` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lecturer`
--

CREATE TABLE `lecturer` (
  `lecturer_id` int(11) NOT NULL,
  `degree` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lecturer_courses`
--

CREATE TABLE `lecturer_courses` (
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lecturer_courses`
--

INSERT INTO `lecturer_courses` (`user_id`, `course_id`) VALUES
(3, 1),
(3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `lecture_question`
--

CREATE TABLE `lecture_question` (
  `exam_paper_id` int(11) NOT NULL,
  `lecture_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `letter`
--

CREATE TABLE `letter` (
  `letter_id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `another_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `final_quali` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` int(11) NOT NULL,
  `degree_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `study_year` int(11) NOT NULL,
  `index_no` int(11) NOT NULL,
  `reg_no` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `degree_prog` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `another_cont_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_voucher` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ma`
--

CREATE TABLE `ma` (
  `MA_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `office_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `letter_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mark`
--

CREATE TABLE `mark` (
  `course_id` int(11) NOT NULL,
  `lecture_id` int(11) NOT NULL,
  `paper_id` int(11) NOT NULL,
  `first_ex_status` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `second_ex_status` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `marks`
--

CREATE TABLE `marks` (
  `index_number` int(10) NOT NULL,
  `question_id` int(10) NOT NULL,
  `marks_by_first_marker` int(10) NOT NULL,
  `marks_by_second_marker` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `marks_assignment`
--

CREATE TABLE `marks_assignment` (
  `marks_id` int(10) NOT NULL,
  `index_number` int(10) NOT NULL,
  `marks` int(5) NOT NULL,
  `assignment_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `marks_assignment`
--

INSERT INTO `marks_assignment` (`marks_id`, `index_number`, `marks`, `assignment_id`) VALUES
(1, 19001436, 100, 1),
(2, 19001411, 100, 1),
(3, 19001428, 90, 1),
(4, 19001245, 90, 1),
(5, 19001851, 90, 1),
(6, 19001381, 90, 1),
(7, 19001251, 90, 1);

-- --------------------------------------------------------

--
-- Table structure for table `mis_report`
--

CREATE TABLE `mis_report` (
  `mis_id` int(11) NOT NULL,
  `report_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `paper_marks`
--

CREATE TABLE `paper_marks` (
  `paper_id` int(11) NOT NULL,
  `sub_marks` int(11) NOT NULL,
  `total_marks` int(11) NOT NULL,
  `paper_precentage` int(11) NOT NULL,
  `mark_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `paper_question`
--

CREATE TABLE `paper_question` (
  `exam_paper_id` int(11) NOT NULL,
  `course_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `question_no` int(11) NOT NULL,
  `exam_sem_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL,
  `payment_date` datetime NOT NULL,
  `amount` int(11) NOT NULL,
  `status` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `index_no` int(11) NOT NULL,
  `ac_year_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `repeat_course`
--

CREATE TABLE `repeat_course` (
  `rc_id` int(11) NOT NULL,
  `course_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int(11) NOT NULL,
  `semester` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `report_id` int(11) NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int(11) NOT NULL,
  `semester` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `exam_sem_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sar`
--

CREATE TABLE `sar` (
  `SAR_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `office_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `semester_report`
--

CREATE TABLE `semester_report` (
  `year_id` int(11) NOT NULL,
  `years` int(11) NOT NULL,
  `result_prece` int(11) NOT NULL,
  `report_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `index_no` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `nic` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `initials` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `general_eng` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `district_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intake` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reg_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telep_1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telep_2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_4` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `student_temp_no` int(11) NOT NULL,
  `district_name` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_initial` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `syllabus` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `AL_index_no` int(11) NOT NULL,
  `rank` int(11) NOT NULL,
  `GPA` int(11) NOT NULL,
  `ac_year_ID` int(11) NOT NULL,
  `degree_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`index_no`, `user_id`, `nic`, `gender`, `initials`, `title`, `general_eng`, `district_no`, `intake`, `reg_no`, `telep_1`, `telep_2`, `address_no`, `address_city`, `address_street`, `address_4`, `student_temp_no`, `district_name`, `name_initial`, `full_name`, `syllabus`, `AL_index_no`, `rank`, `GPA`, `ac_year_ID`, `degree_type`) VALUES
(19001245, 12, '', '', '', '', '', '', '', '2019/CS/124', '', '', '', '', '', '', 0, '', '', '', '', 0, 0, 0, 3, 11),
(19001253, 16, '', '', '', '', '', '', '', '2019/CS/125', '', '', '', '', '', '', 0, '', '', '', '', 0, 0, 0, 3, 11),
(19001381, 15, '', '', '', '', '', '', '', '2019/CS/138', '', '', '', '', '', '', 0, '', '', '', '', 0, 0, 0, 3, 11),
(19001411, 11, '', '', '', '', '', '', '', '2019/CS/141', '', '', '', '', '', '', 0, '', '', '', '', 0, 0, 0, 3, 11),
(19001428, 13, '', '', '', '', '', '', '', '2019/CS/142', '', '', '', '', '', '', 0, '', '', '', '', 0, 0, 0, 3, 11),
(19001851, 14, '', '', '', '', '', '', '', '2019/CS/185', '', '', '', '', '', '', 0, '', '', '', '', 0, 0, 0, 3, 11),
(22000014, 7, '', '', '', '', '', '', '', '2021/CS/001', '', '', '', '', '', '', 0, '', '', '', '', 0, 0, 0, 1, 11),
(22000025, 8, '', '', '', '', '', '', '', '2021/CS/002', '', '', '', '', '', '', 0, '', '', '', '', 0, 0, 0, 1, 11);

-- --------------------------------------------------------

--
-- Table structure for table `student_course`
--

CREATE TABLE `student_course` (
  `index_no` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `student_course`
--

INSERT INTO `student_course` (`index_no`, `course_id`) VALUES
(22000014, 1),
(22000025, 1),
(19001411, 1),
(19001428, 1),
(19001851, 1),
(19001321, 1);

-- --------------------------------------------------------

--
-- Table structure for table `subject_report`
--

CREATE TABLE `subject_report` (
  `subject_id` int(11) NOT NULL,
  `no_of_student` int(11) NOT NULL,
  `report_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `system_pages`
--

CREATE TABLE `system_pages` (
  `page_id` int(11) NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `admin_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transcript`
--

CREATE TABLE `transcript` (
  `transcript_id` int(11) NOT NULL,
  `letter_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `f_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `l_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_pic` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `password`, `email`, `user_type`, `f_name`, `l_name`, `profile_pic`) VALUES
(1, 'lec00001', '$2b$10$U0cvC5RLewagcWQ6jcow4eZ7VoFEQUkD2Xgx1t/NQPorymvGg1pTy', 'thc@ucsc.cmb.ac.lk', 'lecturer', 'Thilina', 'Halloluwa', NULL),
(2, 'lec00002', '$2b$10$/zeJZFuoo.wINRZ2drINO.IgmBweL294AdcNUTr.ldsdic2xUnua2', 'in@ucsc.cmb.ac.lk', 'lecturer', 'Isuru', 'Nanayakkara', NULL),
(3, 'lec00003', '$2b$10$4u4lsb0gfkJigP8b3Kjkh.UnxN.Jhns.coNvWrFayXlPfOWJb5DuK', 'pm@ucsc.cmb.ac.lk', 'lecturer', 'Pasindu', 'Marasinghe', NULL),
(4, 'dir00001', '$2b$10$Hoc8aEenZACB6Dh9SPu/5eKAubLDUBPEQrhEvn1ACF.AheSUksqX.', 'aja@ucsc.cmb.ac.lk', 'director', 'Ajantha', 'Athukorala', NULL),
(5, 'sar00001', '$2b$10$pRCoLGUrZOlUJvXS/oDWWe0Xp1mDpM5EIYIc6Z/V2PBcMWaHcXmP6', 'mw@ucsc.cmb.ac.lk', 'sar', 'Madhuka', 'Wijerathne', NULL),
(6, 'ma00001', '$2b$10$5dBypaBM/FF379a0vahz2OmPK40EgGez3pxL8T6gAhYa.TqeUL9de', 'sk@ucsc.cmb.ac.lk', 'ma', 'Saman', 'Kumara', NULL),
(7, 'stu00001', '$2b$10$k60DUtmnoeYtOt0lcpYAmeCVNzolvME5N7R2lp2SIzEC95WtBMHle', 'dsr@ucsc.cmb.ac.lk', 'student', 'Dinil', 'Ratnayake', NULL),
(8, 'stu00002', '$2b$10$VozWq1JiUvW1Rd0wPxPuXOzLmD36sBQD8vGe.0QWz0WWsNpiDg6Yu', 'phb@ucsc.cmb.ac.lk', 'student', 'Pivithuru', 'Hiruthma', NULL),
(9, 'hox00001', '$2b$10$8s3CVe.j2gDbrzJLlVNH/uPRmZudEJ2GuPA/bYw0vSu.Bk8RuwRVO', 'ck@ucsc.cmb.ac.lk', 'hox', 'Chamath', 'Kappetiya', NULL),
(10, 'lec00004', '$2b$10$x4.tHBHbILUs7LLJm7uCTuy2Z4LMUfabYgWHf.Spr/pAm0fZoXdo6', 'spm@ucsc.cmb.ac.lk', 'lecturer', 'Shiromi', 'Perera', NULL),
(11, 'stu00007', '$2b$10$G6Gy/tpH7Zebkts0ROxVXuNuwU5ijxm7D/MzCXgVeKnQSONuNU3j6', '2019cs141@stu.ucsc.lk', 'student', 'Seniru', 'Bandara', NULL),
(12, 'stu00003', '$2b$10$4ZTdv2lShM/VJtWen9zjCeb0HCTORYga5IeZSp8Dp8HZbVIVDC3ru', '2019cs124@stu.ucsc.lk', 'student', 'Maleesha', 'Hansini', NULL),
(13, 'stu00004', '$2b$10$vpZ4Mm.vsbIgLQm1s7tD9O6zZ.5t2mozkdE7ZwSVYyBCmy4fViu/6', '2019cs142@stu.ucsc.lk', 'student', 'Janitha', 'Ratnayake', NULL),
(14, 'stu00005', '$2b$10$rMiWzJ4ktgFYAxLOiup5YeKoTYaEMelow6kaG8JqbPDTiori9Kpdi', '2019cs185@stu.ucsc.lk', 'student', 'Buddhima', 'Weerasinghe', NULL),
(15, 'stu00006', '$2b$10$MvLbpDD0/2PC2X433gR40eo6LcUkTHOUr7/35CfPWtAJe2NOPoB76', '2019cs138@stu.ucsc.lk', 'student', 'Piyumi', 'Rathnayaka', NULL),
(16, 'stu00008', '$2b$10$KYK6qOEiJklPw16HPBVREutmhh0DdX5EIh79zBZ5ChTLOmlIL44IC', '2019cs125@stu.ucsc.lk', 'student', 'Kavishan', 'Sukumar', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('05522395-3ad6-4b00-8ae1-4b8e3a136f02', '3304d86dc144937ca6afbd5adefc7c1f69617b604f996bcd2b00756c778eadff', '2022-08-19 22:12:21.920', '20220816194935_init', NULL, NULL, '2022-08-19 22:12:21.787', 1),
('0c3b7271-469e-4565-9e0d-62992c57e1cb', '6df45058df397206929bbebeb9e6a2e10d56d1d898e7b1a6ac663942d5a6cf20', '2022-08-19 22:12:58.280', '20220819221257_date', NULL, NULL, '2022-08-19 22:12:58.223', 1),
('32364a86-6255-4fc4-b2f8-bd3dc4782b4d', 'e975161b8561e52088b279d60a6e14afdb686952d004f2794462f46707c0f89c', '2022-08-19 22:12:28.227', '20220819081225_', NULL, NULL, '2022-08-19 22:12:27.939', 1),
('3f824bc0-4e5e-41ed-986d-2bf700654ab4', 'f3784d3b628e98d87c5a258f1b1afd5f36bf38329c9c5b31febdc942f879fe11', '2022-08-19 22:12:27.937', '20220818140114_', NULL, NULL, '2022-08-19 22:12:27.641', 1),
('ca023183-c7a5-44a0-886c-99c0084d1ce0', 'b39549e91562f74d47a5cb6a1b1d44d63bc44d83566a2ad038351c69dd173eb7', '2022-08-19 22:12:27.639', '20220818135840_', NULL, NULL, '2022-08-19 22:12:22.198', 1),
('ff1f6e2f-71f2-4964-b7cc-5e055ebc26fd', '33d9675d5773588af25bbc73b0f9c3a9674dd92369aec3d82ecb8a753e242647', '2022-08-19 22:12:22.196', '20220818053122_uniqueemail', NULL, NULL, '2022-08-19 22:12:21.922', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academic_year`
--
ALTER TABLE `academic_year`
  ADD PRIMARY KEY (`ac_year_ID`);

--
-- Indexes for table `admission`
--
ALTER TABLE `admission`
  ADD PRIMARY KEY (`admission_id`);

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`annou_id`);

--
-- Indexes for table `assignments`
--
ALTER TABLE `assignments`
  ADD PRIMARY KEY (`assignment_id`);

--
-- Indexes for table `assign_marks`
--
ALTER TABLE `assign_marks`
  ADD PRIMARY KEY (`assigment_id`);

--
-- Indexes for table `confirm`
--
ALTER TABLE `confirm`
  ADD PRIMARY KEY (`confirm_id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `course_exam_question`
--
ALTER TABLE `course_exam_question`
  ADD PRIMARY KEY (`question_id`);

--
-- Indexes for table `director`
--
ALTER TABLE `director`
  ADD PRIMARY KEY (`director_id`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`exam_sem_id`);

--
-- Indexes for table `exam_mark`
--
ALTER TABLE `exam_mark`
  ADD PRIMARY KEY (`mark_id`);

--
-- Indexes for table `exam_question_mark`
--
ALTER TABLE `exam_question_mark`
  ADD PRIMARY KEY (`question_id`);

--
-- Indexes for table `exam_timetable`
--
ALTER TABLE `exam_timetable`
  ADD PRIMARY KEY (`timetable_id`);

--
-- Indexes for table `head_of_exam_board`
--
ALTER TABLE `head_of_exam_board`
  ADD PRIMARY KEY (`head_of_exam_ID`);

--
-- Indexes for table `lecturer`
--
ALTER TABLE `lecturer`
  ADD PRIMARY KEY (`lecturer_id`);

--
-- Indexes for table `lecturer_courses`
--
ALTER TABLE `lecturer_courses`
  ADD PRIMARY KEY (`user_id`,`course_id`);

--
-- Indexes for table `lecture_question`
--
ALTER TABLE `lecture_question`
  ADD PRIMARY KEY (`exam_paper_id`);

--
-- Indexes for table `letter`
--
ALTER TABLE `letter`
  ADD PRIMARY KEY (`letter_id`);

--
-- Indexes for table `ma`
--
ALTER TABLE `ma`
  ADD PRIMARY KEY (`MA_id`);

--
-- Indexes for table `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`index_number`,`question_id`);

--
-- Indexes for table `marks_assignment`
--
ALTER TABLE `marks_assignment`
  ADD PRIMARY KEY (`marks_id`);

--
-- Indexes for table `mis_report`
--
ALTER TABLE `mis_report`
  ADD PRIMARY KEY (`mis_id`);

--
-- Indexes for table `paper_marks`
--
ALTER TABLE `paper_marks`
  ADD PRIMARY KEY (`paper_id`);

--
-- Indexes for table `paper_question`
--
ALTER TABLE `paper_question`
  ADD PRIMARY KEY (`exam_paper_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `repeat_course`
--
ALTER TABLE `repeat_course`
  ADD PRIMARY KEY (`rc_id`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`report_id`);

--
-- Indexes for table `sar`
--
ALTER TABLE `sar`
  ADD PRIMARY KEY (`SAR_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`index_no`);

--
-- Indexes for table `subject_report`
--
ALTER TABLE `subject_report`
  ADD PRIMARY KEY (`subject_id`);

--
-- Indexes for table `system_pages`
--
ALTER TABLE `system_pages`
  ADD PRIMARY KEY (`page_id`);

--
-- Indexes for table `transcript`
--
ALTER TABLE `transcript`
  ADD PRIMARY KEY (`transcript_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD UNIQUE KEY `email_unique` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academic_year`
--
ALTER TABLE `academic_year`
  MODIFY `ac_year_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admission`
--
ALTER TABLE `admission`
  MODIFY `admission_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `annou_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `assignments`
--
ALTER TABLE `assignments`
  MODIFY `assignment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `assign_marks`
--
ALTER TABLE `assign_marks`
  MODIFY `assigment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `confirm`
--
ALTER TABLE `confirm`
  MODIFY `confirm_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `course_exam_question`
--
ALTER TABLE `course_exam_question`
  MODIFY `question_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `director`
--
ALTER TABLE `director`
  MODIFY `director_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `exam_sem_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `exam_mark`
--
ALTER TABLE `exam_mark`
  MODIFY `mark_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `exam_timetable`
--
ALTER TABLE `exam_timetable`
  MODIFY `timetable_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `head_of_exam_board`
--
ALTER TABLE `head_of_exam_board`
  MODIFY `head_of_exam_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lecturer`
--
ALTER TABLE `lecturer`
  MODIFY `lecturer_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `letter`
--
ALTER TABLE `letter`
  MODIFY `letter_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ma`
--
ALTER TABLE `ma`
  MODIFY `MA_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `marks_assignment`
--
ALTER TABLE `marks_assignment`
  MODIFY `marks_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `mis_report`
--
ALTER TABLE `mis_report`
  MODIFY `mis_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `paper_marks`
--
ALTER TABLE `paper_marks`
  MODIFY `paper_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `paper_question`
--
ALTER TABLE `paper_question`
  MODIFY `exam_paper_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `repeat_course`
--
ALTER TABLE `repeat_course`
  MODIFY `rc_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sar`
--
ALTER TABLE `sar`
  MODIFY `SAR_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `index_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22000027;

--
-- AUTO_INCREMENT for table `subject_report`
--
ALTER TABLE `subject_report`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `system_pages`
--
ALTER TABLE `system_pages`
  MODIFY `page_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transcript`
--
ALTER TABLE `transcript`
  MODIFY `transcript_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
