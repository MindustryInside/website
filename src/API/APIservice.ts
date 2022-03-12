import axios from "axios";

export class APIservice {
    static async getData(url: string) {
        const response = await axios.get(url)
        return response.data
    }
}