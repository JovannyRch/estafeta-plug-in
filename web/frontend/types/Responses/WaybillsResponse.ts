export interface WaybillsResponse {
	documentWaybill: DocumentWaybill[]
}

export interface DocumentWaybill {
	code: string
	pdfFile: string
	result: Result
}

export interface Result {
	code: string
	Description: string
}
