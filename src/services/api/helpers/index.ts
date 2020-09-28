import { stringify } from "querystring";
import { PDFTexts } from "src/pages/form/types";
import { PDFTextSubmitPayloadItem } from "../types";

export const preparePDFTextPayload = (pdfTexts: PDFTexts): PDFTextSubmitPayloadItem[] => {
	const payload: PDFTextSubmitPayloadItem[] = [];
	const constructionItems = Object.keys(pdfTexts);

	constructionItems.forEach((constructionItem: string) => {
		const newConstructionItemLayer: PDFTextSubmitPayloadItem = {
			text: constructionItem,
			children: [],
		};
		const sections = Object.keys(pdfTexts[constructionItem]);

		sections.forEach((section: string) => {
			const newSectionItemLayer: PDFTextSubmitPayloadItem = {
				text: section,
				children: [],
			};
			const pdfTextsChildren = pdfTexts[constructionItem][section];

			pdfTextsChildren.forEach((text: string) => {
				const newPDFTextChildren: PDFTextSubmitPayloadItem = {
					text,
					children: [],
				};

				newSectionItemLayer.children.push(newPDFTextChildren);
			});

			newConstructionItemLayer.children.push(newSectionItemLayer);
		});

		payload.push(newConstructionItemLayer);
	});

	return payload;
};
