export default function getCookie(name) {
    const token = document.cookie;
    const arrCookie = token.split(';');

    for (let i = 0; i < arrCookie.length; i += 1) {
        const arr = arrCookie[i].split('=')
        if (arr[0] === name) {
            return arr[1]
        }
    }
    return '';
}
