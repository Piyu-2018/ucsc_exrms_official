/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_name]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `f_name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `l_name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_pic` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    ADD COLUMN `f_name` VARCHAR(255) NOT NULL,
    ADD COLUMN `l_name` VARCHAR(255) NOT NULL,
    ADD COLUMN `profile_pic` VARCHAR(255) NOT NULL,
    MODIFY `user_name` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `user_type` VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE `academic_year` (
    `ac_year_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `no_of_student` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,

    PRIMARY KEY (`ac_year_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admission` (
    `admission_id` INTEGER NOT NULL AUTO_INCREMENT,
    `exam_hall` VARCHAR(255) NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `course_code` VARCHAR(255) NOT NULL,
    `exan_date` DATE NOT NULL,
    `exam_time` DATETIME(0) NOT NULL,
    `attendence_verify` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`admission_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `announcement` (
    `annou_id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(255) NOT NULL,
    `admin_id` INTEGER NOT NULL,

    PRIMARY KEY (`annou_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assign_marks` (
    `assigment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_marks` INTEGER NOT NULL,
    `total_marks` INTEGER NOT NULL,
    `assign_precentage` INTEGER NOT NULL,
    `mark_id` INTEGER NOT NULL,

    PRIMARY KEY (`assigment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chat` (
    `index_no` INTEGER NOT NULL,
    `staff_id` INTEGER NOT NULL,
    `lecture_id` INTEGER NOT NULL,
    `text` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `message_from` VARCHAR(255) NOT NULL,
    `message_to` VARCHAR(255) NOT NULL,
    `time` DATETIME(0) NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `confirm` (
    `confirm_id` INTEGER NOT NULL AUTO_INCREMENT,
    `letter_id` INTEGER NOT NULL,

    PRIMARY KEY (`confirm_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course` (
    `course_id` INTEGER NOT NULL AUTO_INCREMENT,
    `year` INTEGER NOT NULL,
    `semester` VARCHAR(255) NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `course_code` VARCHAR(255) NOT NULL,
    `lecture_name` VARCHAR(255) NOT NULL,
    `ac_year_ID` INTEGER NOT NULL,

    PRIMARY KEY (`course_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `director` (
    `director_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`director_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exam` (
    `exam_sem_id` INTEGER NOT NULL AUTO_INCREMENT,
    `semester` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,

    PRIMARY KEY (`exam_sem_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exam_admission_stu` (
    `index_no` INTEGER NOT NULL,
    `admission_id` INTEGER NOT NULL,
    `exam_sem_id` INTEGER NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exam_mark` (
    `mark_id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_code` VARCHAR(255) NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `grade` VARCHAR(255) NOT NULL,
    `total_mark` INTEGER NOT NULL,
    `director_status` VARCHAR(255) NOT NULL,
    `head_of_exam_status` VARCHAR(255) NOT NULL,
    `exam_sem_id` INTEGER NOT NULL,
    `director_id` INTEGER NOT NULL,
    `head_of_exam_id` INTEGER NOT NULL,
    `index_no` INTEGER NOT NULL,

    PRIMARY KEY (`mark_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exam_timetable` (
    `timetable_id` INTEGER NOT NULL AUTO_INCREMENT,
    `exam_date` DATE NOT NULL,
    `exam_time` DATETIME(0) NOT NULL,
    `course_code` VARCHAR(255) NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `exam_sem_id` INTEGER NOT NULL,

    PRIMARY KEY (`timetable_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `head_of_exam_board` (
    `head_of_exam_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `staff_id` INTEGER NOT NULL,

    PRIMARY KEY (`head_of_exam_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lecture_question` (
    `exam_paper_id` INTEGER NOT NULL,
    `lecture_id` INTEGER NOT NULL,

    PRIMARY KEY (`exam_paper_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lecturer` (
    `lecturer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `degree` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`lecturer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `letter` (
    `letter_id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `another_email` VARCHAR(255) NOT NULL,
    `final_quali` VARCHAR(255) NOT NULL,
    `id_no` VARCHAR(255) NOT NULL,
    `duration` INTEGER NOT NULL,
    `degree_status` VARCHAR(255) NOT NULL,
    `study_year` INTEGER NOT NULL,
    `index_no` INTEGER NOT NULL,
    `reg_no` VARCHAR(100) NOT NULL,
    `degree_prog` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `contact_no` VARCHAR(255) NOT NULL,
    `another_cont_no` VARCHAR(255) NOT NULL,
    `payment_voucher` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`letter_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ma` (
    `MA_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `staff_id` INTEGER NOT NULL,
    `office_id` VARCHAR(255) NOT NULL,
    `letter_id` INTEGER NOT NULL,

    PRIMARY KEY (`MA_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mark` (
    `course_id` INTEGER NOT NULL,
    `lecture_id` INTEGER NOT NULL,
    `paper_id` INTEGER NOT NULL,
    `first_ex_status` VARCHAR(100) NOT NULL,
    `second_ex_status` VARCHAR(100) NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mis_report` (
    `mis_id` INTEGER NOT NULL AUTO_INCREMENT,
    `report_id` INTEGER NOT NULL,

    PRIMARY KEY (`mis_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paper_marks` (
    `paper_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_marks` INTEGER NOT NULL,
    `total_marks` INTEGER NOT NULL,
    `paper_precentage` INTEGER NOT NULL,
    `mark_id` INTEGER NOT NULL,

    PRIMARY KEY (`paper_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paper_question` (
    `exam_paper_id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_code` VARCHAR(255) NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `question_no` INTEGER NOT NULL,
    `exam_sem_id` INTEGER NOT NULL,

    PRIMARY KEY (`exam_paper_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `payment_date` DATETIME(0) NOT NULL,
    `amount` INTEGER NOT NULL,
    `status` VARCHAR(100) NOT NULL,
    `index_no` INTEGER NOT NULL,
    `ac_year_ID` INTEGER NOT NULL,

    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `repeat_course` (
    `rc_id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_code` VARCHAR(255) NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `year` INTEGER NOT NULL,
    `semester` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`rc_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report` (
    `report_id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_name` VARCHAR(255) NOT NULL,
    `course_code` VARCHAR(255) NOT NULL,
    `year` INTEGER NOT NULL,
    `semester` VARCHAR(255) NOT NULL,
    `exam_sem_id` INTEGER NOT NULL,

    PRIMARY KEY (`report_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sar` (
    `SAR_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `staff_id` INTEGER NOT NULL,
    `office_id` INTEGER NOT NULL,

    PRIMARY KEY (`SAR_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `semester_report` (
    `year_id` INTEGER NOT NULL,
    `years` INTEGER NOT NULL,
    `result_prece` INTEGER NOT NULL,
    `report_id` INTEGER NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `staff` (
    `staff_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`staff_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `index_no` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `nic` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(25) NOT NULL,
    `initials` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `general_eng` VARCHAR(255) NOT NULL,
    `district_no` VARCHAR(255) NOT NULL,
    `intake` VARCHAR(255) NOT NULL,
    `reg_no` VARCHAR(255) NOT NULL,
    `telep_1` VARCHAR(255) NOT NULL,
    `telep_2` VARCHAR(255) NOT NULL,
    `address_no` VARCHAR(255) NOT NULL,
    `address_city` VARCHAR(255) NOT NULL,
    `address_street` VARCHAR(255) NOT NULL,
    `address_4` VARCHAR(255) NOT NULL,
    `student_temp_no` INTEGER NOT NULL,
    `district_name` VARCHAR(25) NOT NULL,
    `name_initial` VARCHAR(255) NOT NULL,
    `full_name` VARCHAR(255) NOT NULL,
    `syllabus` VARCHAR(255) NOT NULL,
    `AL_index_no` INTEGER NOT NULL,
    `rank` INTEGER NOT NULL,
    `GPA` INTEGER NOT NULL,
    `ac_year_ID` INTEGER NOT NULL,

    PRIMARY KEY (`index_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_course` (
    `index_no` INTEGER NOT NULL,
    `course_id` INTEGER NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subject_report` (
    `subject_id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_of_student` INTEGER NOT NULL,
    `report_id` INTEGER NOT NULL,

    PRIMARY KEY (`subject_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_pages` (
    `page_id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(255) NOT NULL,
    `admin_id` INTEGER NOT NULL,

    PRIMARY KEY (`page_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transcript` (
    `transcript_id` INTEGER NOT NULL AUTO_INCREMENT,
    `letter_id` INTEGER NOT NULL,

    PRIMARY KEY (`transcript_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `user_name` ON `user`(`user_name`);

-- RedefineIndex
CREATE UNIQUE INDEX `email_unique` ON `user`(`email`);
DROP INDEX `user_email_key` ON `user`;
