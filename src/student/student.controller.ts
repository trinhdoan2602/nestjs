/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
    @Get()
    getStudent(){
        return "All Students"
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ) {
        return `Get Student By Id of ${studentId}`
    }

    @Post()
    createStudent(
        @Body() body
    ) {
        return `Create Student With The Following Data ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body
    ) {
        return `Update Student With Id of ${studentId} with data of ${JSON.stringify(body)}`
    }
}
