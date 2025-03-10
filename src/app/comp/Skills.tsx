"use client"
import React, { useState } from 'react';

type SkillCategory = {
    category: string;
    skills: string[];
};


const skillsData = [
    { category: 'Frontend Technologies', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS','Next JS','Typescript', 'Vite','Responsive design','React Router','Node JS'] },
    { category: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Github Copilot','Cursor AI','Claude AI','NPM','Bootstrap','Shadcn UI','Aceternity UI','Material UI'] },
    { category: 'CS Fundamentals', skills: ['Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Database Management', 'Networking Basics'] }
];
const Skills: React.FC = () => {
    const [activeSkill, setActiveSkill] = useState<string | null>(null);

    const handleSkillClick = (skill: string) => {
        setActiveSkill(skill === activeSkill ? null : skill);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-slate-950 flex flex-col items-center py-12 px-6 md:px-20 text-white">
            <h2 className="text-2xl md:text-4xl font-bold dark:text-white text-center mb-8">My Skills</h2>

            <div className="max-w-4xl w-full grid gap-8">
                {skillsData.map((section, index) => (
                    <div 
                        key={index} 
                        className='bg-gray-500 p-5 px-15 rounded-lg shadow-md transition-transform transform hover:shadow-lg hover:-translate-y-2'
                    >
                        <h3 className="text-2xl font-semibold text-black mb-4">{section.category}</h3>
                        <div className="flex flex-wrap gap-4">
                            {section.skills.map((skill, idx) => (
                                <button 
                                    key={idx}
                                    className={`px-5 py-2 rounded-full transition-all border-2 ${
                                        activeSkill === skill 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-gray-400 text-black text-bold hover:bg-blue-100 hover:border-blue-500 '
                                    } shadow-lg text-bold`}
                                    onClick={() => handleSkillClick(skill)}
                                >
                                    {skill}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {activeSkill && (
                <div className="mt-8 bg-white shadow-md rounded-lg p-4 text-center">
                    <p className="text-lg text-gray-800">
                        You selected: <span className="font-semibold text-blue-600">{activeSkill}</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Skills;

