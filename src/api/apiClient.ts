import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://365commercial-portal.sootsoft.hu/banners"
})

export default apiClient;