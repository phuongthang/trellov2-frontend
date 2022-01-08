const validation = {
    TEXT: {
        MIN_LENGTH: 4,
        MAX_LENGTH: 255
    },

    EMAIL: {
        PATTERN: '^[\\w\\d._+-]+@[\\w\\d_-]+\\.[\\w\\d._-]+$',
        MAX_LENGTH: 255,
    },

    PASSWORD: {
        PATTERN: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,32}$',
        MAX_LENGTH: 32,
        MIN_LENGTH: 8
    },

    PHONE: {
        PATTERN: '^[0-9]{10,11}$'
    }
};
export default validation;