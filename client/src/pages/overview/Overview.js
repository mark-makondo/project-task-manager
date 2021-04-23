import React from 'react';

// sub components
import OverviewHeader from './parts/OverviewHeader.js';
import ProjectHolder from './parts/ProjectHolder.js';

const Overview = ({
	data,
	isLoading,
	projectCount,
	ownedProjects,
	clicked,
	toggleCollation,
	showMembersOnClickHandler,
	showTasksOnClickHandler,
}) => {
	return (
		<div className='overview'>
			{!isLoading ? (
				<div className='overview-container'>
					<OverviewHeader
						data={data}
						projectCount={projectCount}
						ownedProjects={ownedProjects}
						clicked={clicked}
						toggleCollation={toggleCollation}
					/>

					<div className='overview-container__body'>
						{data.length !== 0 &&
							data.map((project, i) => (
								<ProjectHolder
									key={`${project._id}-${i}`}
									project={project}
									showMembersOnClickHandler={showMembersOnClickHandler}
									showTasksOnClickHandler={showTasksOnClickHandler}
								/>
							))}
					</div>
				</div>
			) : (
				<i className='overview-loading fas fa-spinner fa-spin'></i>
			)}
		</div>
	);
};

export default Overview;
