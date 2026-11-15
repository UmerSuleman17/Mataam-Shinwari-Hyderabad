export type StoredReview = { id: string; createdAt: string; billId: string; name: string; rating: number; text: string };
export function createFeedbackHandlers(options: { accessCode: string; save: (review: StoredReview) => Promise<void>; list: () => Promise<unknown[]> }): { POST(request: Request): Promise<Response>; GET(): Promise<Response> };
