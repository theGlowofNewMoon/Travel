let defaultCity = "上海";
try {
    if (localStorage && localStorage.city !== undefined) {
        defaultCity = localStorage.city;
    }
} catch (e) {

}

export default {
    city: defaultCity
}