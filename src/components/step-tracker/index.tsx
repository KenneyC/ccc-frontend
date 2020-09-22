import React from 'react';
import { Line } from '../line';

interface StepTrackerProps {
	currentStep: number;
	maxStep: number;
	finished?: boolean;
}

export const StepTracker: React.FC<StepTrackerProps> = (props: StepTrackerProps) => {
	const { currentStep, maxStep, finished } = props;

	console.log(currentStep);

	const populateWithSteps = () => {
		const steps = [];
		for (let i = 0; i < maxStep; i++) {
			steps.push(
				<>
					<span
						className={`step ${currentStep >= i || finished ? 'step-activated' : ''}`}>
						{i + 1}
					</span>
					<Line activated={currentStep > i || finished} />
				</>
			);
		}
		steps.push(<span className={`step ${finished ? 'step-activated' : ''}`}>Result</span>);
		return steps;
	};

	return <div className="step-tracker">{populateWithSteps()}</div>;
};
