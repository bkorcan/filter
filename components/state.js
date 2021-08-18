import create from 'zustand'

const useStore = create((set) => ({

inDate:'',
setInDate: (date) => set(state => ({ inDate:date })),

}));

export   {useStore};