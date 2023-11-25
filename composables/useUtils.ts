export const useUtils = () => {
    const isLoggedIn = ref(true)
    const updateLoggedStatus = (value: boolean) => {
        isLoggedIn.value = value
    }

    return {
        isLoggedIn,
        updateLoggedStatus,
    }
}