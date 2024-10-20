// TODO future API layer may use node-fetch to prevent boiler-plate code bloat
import { TrackedPaper } from "./response-types"
import Cookies from 'js-cookie';

const BASE_URL = "http://127.0.0.1:8000"
const GET_TOKEN = "api-token-auth"
const ARXIV = "arxiv"
const USERS = "users"



class ApiClient {
    private baseURL: string = BASE_URL
    private token: string | null = null;
    constructor() {
    };
    async customFetch(url: string, options: RequestInit = {}): Promise<Response> {
        // Merge headers safely using TypeScript's `RequestInit` type
        const modifiedOptions: RequestInit = {
            ...options,
            headers: {
                ...options.headers, // Preserve any existing headers
                'Authorization': `Token  ${this.token}`, // Add your custom header here
            },
        };


        return fetch(url, modifiedOptions);
    }
    async getStagedItems(): Promise<TrackedPaper[]> {
        const response = await this.customFetch(`${this.baseURL}/${ARXIV}/tracked/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        return data;
    }
    async login(username: string, password: string, onLogin: () => void): Promise<void> {
        this.getToken(username, password)
            .then((token) => {
                this.token = token;
                onLogin();
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    }
    async createUser(username: string, password: string, onCreateUser: () => void): Promise<void> {
        try {
            const response = await fetch(`${this.baseURL}/${USERS}/create/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            this.token = data['token'];
            onCreateUser();
        } catch (error) {
            console.error('User creation error:', error);
            throw new Error("User creation error!");
        }
    }
    async logout(): Promise<void> {
    }
    async getToken(username: string, password: string): Promise<string> {
        const response = await fetch(`${this.baseURL}/${GET_TOKEN}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.token)
        return data.token;
    }
}



export const api = new ApiClient();