export interface GuardianResponse {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    edition: GuardianEdition;
    orderBy: string;
    results: any;
}

export interface GuardianResult {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: Date;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
}

export interface GuardianSection {
    id: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    editions: Array<GuardianEdition>;
}

export interface GuardianEdition {
    id: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    code: string;
}
