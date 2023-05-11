const localSave = (e) => {
    window.localStorage.setItem("objects" , JSON.stringify(e))
}
const loadLocal = () => {
    let storage = window.localStorage.getItem("objects");
    storage = JSON.parse(storage)
    return storage
}
export { localSave , loadLocal }