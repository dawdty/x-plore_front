// TODO future API layer may use node-fetch to prevent boiler-plate code bloat
import { TrackedPaper } from "./response-types"
import Cookies from 'js-cookie';

const BASE_URL = "http://127.0.0.1:8000"
const ARXIV = "arxiv"
const AUTH = "auth"


class ApiClient {
    private baseURL: string = BASE_URL
    constructor() {
        this.getCSRF()
    }
    async getCSRF() {
        // const response = await fetch(`${this.baseURL}/${AUTH}/`, {
        //     method: 'GET',
        //     credentials: 'include'
        // });
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json();
        // console.log(document.cookie)
        // return data;
    }
    async getStagedItems(user_id: number): Promise<TrackedPaper[]> {
        const response = await fetch(`${this.baseURL}/${ARXIV}/tracked/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        return data;
    }
    async login(username: string, password: string): Promise<void> {
        const token = Cookies.get('csrftoken')
        if (token != null) {
            const response = await fetch(`${this.baseURL}/${AUTH}/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': token,
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }

    }
}

export const api = new ApiClient();