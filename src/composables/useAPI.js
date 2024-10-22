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

    const getQuestion = async (categoryId) => {
        const response = await instance.get('api.php', {
            params: {
                amount: 1,
                category: categoryId,
            }
        })

        return response.data.results[0]
    }

    return { instance, categorgies, getCategories, getQuestion}
}