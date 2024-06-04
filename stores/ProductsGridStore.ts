import {defineStore} from 'pinia'
import {useFilterStore} from "~/stores/FilterStore";

export const useProductsGridStore = defineStore('productsGridStore', ()=> {
    const productsAll = ref([]);
    const productsLoadingStatus = ref('');
    const activePageNumber = ref(1);
    const totalPage = ref(1);
    const numShowPage =  9;
    const lastItemPage = ref(numShowPage);
    const {filtersType} = toRefs(useFilterStore());

    const products = computed(() => unref(productsAll).slice(unref(lastItemPage) - numShowPage, unref(lastItemPage)))

    const fetchProducts = () => {
        const paramType =  unref(filtersType) ? `type_like=${unref(filtersType)}` : '';
        productsLoadingStatus.value = 'loading'

        fetch(`https://kalinka.phuket.forsale/objects?${paramType}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject();
            })
            .then((data) => {
                productsAll.value = data;
                totalPage.value = Math.ceil(data.length / numShowPage);
                productsLoadingStatus.value = 'loaded';
            }).catch(() => {
            productsLoadingStatus.value = 'error';
        });
    };

    const setProductsActivePage = (activePage: number) => {
        activePageNumber.value = activePage;
        lastItemPage.value = unref(activePageNumber) * numShowPage;
    }

    return {
        products,
        fetchProducts,
        setProductsActivePage,
        productsLoadingStatus,
        activePageNumber,
        totalPage,
    }
});
