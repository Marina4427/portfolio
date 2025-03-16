//Проверка темной темы на уровне системных настроек
const detectDarkMode =() => {
    if (window.matchMedia && 
        window.matchMedia("(prefers-color-scheme: dark)").matches ) {
            return 'dark'
        }
        return 'light'
    }

export default detectDarkMode    