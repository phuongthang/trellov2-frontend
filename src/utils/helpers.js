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
 * filter user from experience
 */
export function filterUserFromExperience(userList, conditionList) {
    return userList.filter(item => conditionList.includes(item.experience));
}

/**
 * filter user from _id
 */
export function filterUserFromExceptId(userList, _id) {
    return userList.filter(item => item._id !== _id);
}

/**
 * filter user from _id
 */
export function findUserFromId(userList, _id) {
    return userList.find(item => item._id === _id);
}

/**
 * filter user member
 */
export function filterUserMember(usersMemberList, userIdSelectedList, conditionList) {
    console.log("conditionList", conditionList);
    const userMemberList = usersMemberList.filter(item =>  !userIdSelectedList.includes(item._id));
    return userMemberList.filter(item => conditionList.includes(''+item.position));
}