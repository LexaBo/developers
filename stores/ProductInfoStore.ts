import {defineStore} from 'pinia'

export const useProductInfoStore = defineStore('productInfoStore', () => {
    const productInfo = reactive({
        name: '',
        type: '',
        description: '',
    });
    const image = ref('');
    const productLoadingStatus = ref('');

    const fetchProduct = (id?: string | string[]) => {
        productLoadingStatus.value = 'loading';

        fetch(`https://kalinka.phuket.forsale/objects/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(response);
            })
            .then((data) => {
                productLoadingStatus.value = 'loaded';
                productInfo.name = data.title.ru
                productInfo.type = data.type[0]
                productInfo.description = data.description.ru
                image.value = data.images[0];
            }).catch(() => {
            productLoadingStatus.value = 'error';
        });
    };

    return {
        fetchProduct,
        productInfo,
        image,
        productLoadingStatus,
    }
});
