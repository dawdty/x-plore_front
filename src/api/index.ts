// TODO future API layer may use node-fetch to prevent boiler-plate code bloat
import { StagedEntryItem } from "./response-types"

const BASE_URL = "http://127.0.0.1:8000/"
const ARXIV = "arxiv"
class ApiClient {
    private baseURL: string = BASE_URL

    constructor() { }
    async getStagedItems(user_id: number): Promise<StagedEntryItem[]> {
        const response = await fetch(`${this.baseURL}/${ARXIV}/${user_id}/staged`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.staged_papers;
    }
}

export const api = new ApiClient();