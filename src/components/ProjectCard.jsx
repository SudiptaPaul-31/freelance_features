import React, { useState } from 'react';

function ProjectCard({ project, onApply }) {
    const [showRateInput, setShowRateInput] = useState(false); // State to control input visibility
    const [proposedRate, setProposedRate] = useState('');

    const handleApplyClick = () => {
        // Toggle the visibility of the proposed rate input field
        setShowRateInput(true);
    };

    const handleSubmitClick = () => {
        if (!proposedRate) {
            alert('Please enter a proposed rate.');
            return;
        }
        onApply(project._id, proposedRate);
        setShowRateInput(false); // Hide the input field after submitting
    };

    return (
        <div className="border rounded p-4 shadow mb-4 w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-between" style={{ height: '350px' }}>
            <h3 className="font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <p>Required Skills: {project.skills.join(', ')}</p>
            <p>Price Range: {project.priceRange}</p>

            {!showRateInput ? (
                <button
                    onClick={handleApplyClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                    Apply Now
                </button>
            ) : (
                <div>
                    <input
                        type="number"
                        value={proposedRate}
                        onChange={(e) => setProposedRate(e.target.value)}
                        placeholder="Enter your proposed rate"
                        className="border rounded px-4 py-2 mt-2 w-full"
                    />
                    <button
                        onClick={handleSubmitClick}
                        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                    >
                        Submit Application
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProjectCard;
