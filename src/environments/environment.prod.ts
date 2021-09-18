export const environment = {
  production: false,
  schoolId: '12345',
  teacherId: '8d9c4552-260f-4c27-946f-dcd98d86dfd6',
  GET_STUDENT_URL: 'http://3.141.92.8:8093/click-escuela/admin-core/school/' + '{schoolId}' + '/student?fullDetail=' + '{fullDetail}',
  POST_STUDENT_URL: 'http://3.141.92.8:8093/click-escuela/admin-core/school/' + '{schoolId}' + '/student',
  EXCEL_URL: 'http://3.141.92.8:8093/click-escuela/admin-core/school/{schoolId}/excel',
  GRADES_URL: 'http://3.141.92.8:8093/click-escuela/teacher-core/school/{schoolId}/grade',
  TEACHERS_URL: 'http://3.141.92.8:8093/click-escuela/admin-core/school/{schoolId}/teacher',
  ACTIVITY_URL: 'http://3.141.92.8:8093/click-escuela/teacher-core/school/{schoolId}/activity',
  COURSE_URL: 'http://3.141.92.8:8093/click-escuela/teacher-core/school/{schoolId}/teacher/6219ad23-cdff-40e7-8462-73e693252f62/courses',
  STUDENT_URL: 'http://3.141.92.8:8093/click-escuela/student-core/school/{schoolId}/student/{studentId}/grades',
  TOKEN_URL: 'http://3.141.92.8:8093/click-escuela/security/login',



};

