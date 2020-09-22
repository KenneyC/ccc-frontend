import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SimpleButton } from 'src/components/button';
import { QuestionSection } from 'src/components/question-section';
import { ApplicationState } from 'src/core/store/types';
import { Section } from '../../pages/questionnaire/types';

interface FormProps {
	sections: Section;
	onContinue: () => void;
}

export const Form: React.FC<FormProps> = (props: FormProps) => {
	const { sections, onContinue } = props;
	const [sectionsCompleted, setSectionsCompleted] = useState<boolean>(false);
	const selectedConstructionItem = useSelector(
		(state: ApplicationState) => state.questionnaire.selectedConstructionItem
	);
	const sectionStatuses = useSelector(
		(state: ApplicationState) => state.questionnaire.sectionStatuses[selectedConstructionItem]
	);

	useEffect(() => {
		const statuses = Object.values(sectionStatuses);
		if (!statuses.includes(false)) {
			setSectionsCompleted(true);
		} else {
			setSectionsCompleted(false);
		}
	}, [sectionStatuses, setSectionsCompleted]);

	return (
		<div className="questionnaire-form-wrapper">
			<h2>
				Questions for{' '}
				{`${selectedConstructionItem
					.charAt(0)
					.toUpperCase()}${selectedConstructionItem.slice(1)}`}
			</h2>
			{Object.keys(sections).map((section: string) => (
				<QuestionSection
					sectionName={section}
					question={sections[section]}
					selectedConstructionItem={selectedConstructionItem}
				/>
			))}
			<SimpleButton text="Continue" onClick={onContinue} disabled={!sectionsCompleted} />
		</div>
	);
};
