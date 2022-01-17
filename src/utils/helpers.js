import moment from "moment";

/**
 * replace string
 * @param {*} message 
 * @param {*} newValue 
 * @returns 
 */
export function replaceString(message, newValue = []) {

    const matchSubstrings = message.match(/{[0-9]+}/g);

    for (let i = 0; i < matchSubstrings.length; i++) {
        message = message.replace(matchSubstrings[i], newValue[i]);
    }

    return message;
}

/**
 * format date
 * @param {*} dateString 
 * @returns 
 */
export function formatDate(dateString) {
    let dateFormat = '';
    if (dateString) {
        dateFormat = moment(dateString).format("YYYY.MM.DD HH:mm");
    }

    return dateFormat;
}

/**
 * fillter user from experience
 */
export function fillterUserFromExperience(userList, experience) {
    return userList.filter(item => item.experience === experience);
}

/**
 * fillter user from _id
 */
export function fillterUserFromExceptId(userList, _id) {
    return userList.filter(item => item._id !== _id);
}

/**
 * fillter user from _id
 */
export function fillterUserFromId(userList, _id) {
    return userList.filter(item => item._id === _id);
}