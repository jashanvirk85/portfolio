import React from 'react';


function ProgressBar({ skill, level }) {
  return (
    <div className="mb-5">
      <p className="text-sm mb-1">{skill}</p>

      <div className="w-full bg-gray-800 h-2 rounded-full">
        <div
          className="bg-cyan-400 h-2 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section className="min-h-screen bg-black text-gray-200 px-8 py-16">

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">


        <div>
          <h2 className="text-lg font-semibold mb-5 border-b border-gray-600 pb-2">Technical Skills</h2>

          <ProgressBar skill="HTML" level={95} />
          <ProgressBar skill="CSS / Tailwind" level={90} />
          <ProgressBar skill="JavaScript" level={85} />
          <ProgressBar skill="React.js" level={80} />
          <ProgressBar skill="Node.js" level={70} />

          <h2 className="text-lg font-semibold mt-8 mb-4 border-b border-gray-600 pb-2">Languages</h2>

          <ProgressBar skill="English" level={80} />
          <ProgressBar skill="Hindi" level={95} />
        </div>


        <div>
          <h2 className="text-lg font-semibold mb-5 border-b border-gray-600 pb-2">Work Experience</h2>

          <div className="mb-5">
            <p className="font-medium">Calculator App</p>
            <p className="text-gray-400 text-sm">Basic calculator using HTML, CSS & JavaScript</p>
          </div>

          <div className="mb-5">
            <p className="font-medium">Porfolio Website</p>
            <p className="text-gray-400 text-sm">Created using React & Tailwind CSS</p>
          </div>

          <div className="mb-5">
            <p className="font-medium">Student Management System</p>
            <p className="text-gray-400 text-sm">Developed in C++</p>
          </div>

          <h2 className="text-lg font-semibold mt-8 mb-3 border-b border-gray-600 pb-2">Education</h2>

          <p className="text-gray-400 text-sm">Bachelor of Computer Applications (BCA)<br />kuk University, 2024-2027</p>
        </div>


        <div>
          <h2 className="text-lg font-semibold mb-5 border-b border-gray-600 pb-2">Services</h2>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Website Development</li>
            <li>Responsive Design</li>
            <li>Frontend Development</li>
            <li>Basic Backend Logic</li>

          </ul>

          <h2 className="text-lg font-semibold mt-8 mb-3 border-b border-gray-600 pb-2">Core Skills</h2>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Problem Solving</li>
            <li>Clean Code</li>
            <li>Time Management</li>
            <li>Team Work</li>
          </ul>

          <h2 className="text-lg font-semibold mt-8 mb-3 border-b border-gray-600 pb-2">Hobbies</h2>

          <p className="text-gray-400 text-sm">Coding • Learning Tech • Gaming • Blogging  </p>
        </div>

      </div>
    </section>
  );
}