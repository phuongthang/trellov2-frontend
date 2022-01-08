const validation = {
    TEXT_MIN_LENGTH: 4,
    TEXT_MAX_LENGTH: 255,
    PHONE: '^[0-9]{10,11}$',
    // EMAIL: '^[\\w\\d._+-]+@[\\w\\d_-]+\\.[\\w\\d._-]+$',
    // PASSWORD: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,32}$',

    EMAIL: {
        PATTERN: '^[\\w\\d._+-]+@[\\w\\d_-]+\\.[\\w\\d._-]+$',
        MAX_LENGTH: 255,
    },

    PASSWORD: {
        PATTERN: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,32}$',
        MAX_LENGTH: 32,
        MIN_LENGTH: 8
    }
};
export default validation;