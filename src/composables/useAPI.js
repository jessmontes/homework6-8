import axios from "axios";
import { ref } from 'vue'

const instance = axios.create({
    baseURL:'https://opentdb.com/',
})

const categorgies = ref([])

export default function useAPI() {
    const getCategories = async () => {
        if (categorgies.value.length === 0) {
            const response = await instance.get('api_category.php')
            categorgies.value = response.data.trivia_categories
        }
    }

    return { instance, categorgies, getCategories}
}