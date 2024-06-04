import { defineStore } from 'pinia'

export const useFilterStore = defineStore('FilterStore', () =>{
    const filtersType= ref('');

    const setFilter = (filter:string) => {
        filtersType.value = filter;
    };

    return {
        filtersType,
        setFilter,
    }
});
