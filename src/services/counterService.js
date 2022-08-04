
import axios from "axios";

export const counterService = {
    getRnd: async () => {
        const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';
        return await axios.get(url);  // stessa chiamata con axios, sempre con await
    }
}