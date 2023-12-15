import React, { useState } from 'react';
import Navbar from './Navbar'
export default function GradeReport(){
    const semesters = [
        {
          id: 1,
          name: 'Level 100 First Semester',
          grades: [
            { course: 'Mathematics', grade: 'A' },
            { course: 'Physics', grade: 'B+' },
            // Add more courses and grades as needed
          ],
        },
        {
          id: 2,
          name: 'Level 100 First Semester',
          grades: [
            { course: 'Computer Science', grade: 'A-' },
            { course: 'Chemistry', grade: 'B' },
            // Add more courses and grades as needed
          ],
        },
        {
          id: 3,
          name: 'Level 200 First Semester',
          grades: [
            { course: 'History', grade: 'A+' },
            { course: 'English', grade: 'B-' },
            // Add more courses and grades as needed
          ],
        },
      ];
    
     
      const [openSemester, setOpenSemester] = useState(null);
    
      return (
            <>
            <Navbar />
        <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Grade Report</h1>

      {/* Semester Accordion */}
      {semesters.map((semester) => (
        <div key={semester.id} className="mb-4">
          {/* Semester Header */}
          <div
            className="flex items-center justify-between p-4 bg-gray-200 cursor-pointer"
            onClick={() => setOpenSemester(openSemester === semester.id ? null : semester.id)}
          >
            <div className="font-semibold">{semester.name}</div>
            <div className="text-gray-600">{openSemester === semester.id ? '▲' : '▼'}</div>
          </div>

          {/* Semester Details */}
          {openSemester === semester.id && (
            <div className="p-4 border-t">
              {/* Grade Table */}
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Course</th>
                    <th className="text-left">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.grades.map((grade) => (
                    <tr key={grade.course}>
                      <td>{grade.course}</td>
                      <td>{grade.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
        </>
    );
}