import Navbar from './Navbar'
export default function Dashboard() {
  const grades = [
    {
      courseName: 'Calculus',
      grade: 'A',
      weight: '100%',
      gradeColor: 'bg-green-500',
    },
    {
      courseName: 'Physics',
      grade: 'B',
      weight: '50%',
      gradeColor: 'bg-yellow-500',
    },
    {
      courseName: 'Chemistry',
      grade: 'C',
      weight: '30%',
      gradeColor: 'bg-blue-500',
    },
 ];

return (
      <>
    <Navbar />
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      <main>
        {/* Grading System Overview */}
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Dashboard Feed */}
    <div className="w-full">
      <h2 className="text-xl font-bold mb-5">Your Grades</h2>
      <div className="bg-white shadow-md rounded p-6">
        <ul>
          {grades.map((grade, index) => (
            <li key={index} className="mb-3">
              <div className="bg-gray-200 p-2 rounded-lg">
                <h3 className="font-bold text-lg">{grade.courseName}</h3>
                <p className="mb-2">
                 Grade: <span className={`${grade.gradeColor} text-white p-1 rounded-lg`}>{grade.grade}</span>
                </p>
                <p>Weight: {grade.weight}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
          {/* Students, Subjects, and Teachers Tabs */}
        </div>
      </main>

      <footer className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Footer links */}
        </div>
      </footer>
    </div>
    </>
 );
}
