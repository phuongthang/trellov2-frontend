const validation = {
    TEXT_MIN_LENGTH: 4,
    TEXT_MAX_LENGTH: 255,
    PHONE: '^[0-9]{10,11}$',
    EMAIL: '^[\\w\\d._+-]+@[\\w\\d_-]+\\.[\\w\\d._-]+$',
    PASSWORD: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,32}$'
};
export default validation;