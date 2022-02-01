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
        dateFormat = moment(dateString).format("DD/MM/YYYY");
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
export function findFromId(conditionList, _id) {
    return conditionList.find(item => item._id === _id);
}

/**
 * filter user member
 */
export function filterUserMember(usersMemberList, userIdSelectedList, conditionList) {
    const userMemberList = usersMemberList.filter(item => !userIdSelectedList.includes(item._id));
    return userMemberList.filter(item => conditionList.includes('' + item.position));
}


/**
 * get user id from list user selected
 */
export function getUserIdFromListUserSelected(userSelectedList) {
    const member = [];
    userSelectedList.forEach((item) => {
        member.push(item._id);
    });
    return member;
}


/**
 * filter user member
 */
export function onLoadUserMember(usersMemberList, userIdSelectedList) {
    return usersMemberList.filter(item => !userIdSelectedList.includes(item._id));
}