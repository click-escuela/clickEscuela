export const environment = {
  production: false,
  schoolId: '12345',
  GET_STUDENT_URL: 'http://3.141.92.8:8080/click-escuela/admin-core/school/' + '{schoolId}' + '/student?fullDetail=' + '{fullDetail}',
  POST_STUDENT_URL: 'http://3.141.92.8:8080/click-escuela/admin-core/school/' + '{schoolId}' + '/student',
  GRADES_URL: 'http://3.141.92.8:8081/click-escuela/teacher-core/school/{schoolId}/grade',
  TEACHERS_URL: 'http://3.141.92.8:8080/click-escuela/admin-core/school/{schoolId}/teacher',
  ACTIVITY_URL: 'http://3.141.92.8:8081/click-escuela/teacher-core/school/{schoolId}/activity',
  COURSE_URL: 'http://18.117.74.63:8090/click-escuela/admin-core/school/{schoolId}/teacher/6219ad23-cdff-40e7-8462-73e693252f62/courses'


};
