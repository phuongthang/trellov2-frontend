const typeCode = {
    USER: {
        /**
     * gender
     */
        GENDER: {
            OTHER: 0,
            MALE: 1,
            FEMALE: 2
        },
        GENDER_MAPPING: {
            0: 'Khác',
            1: 'Nam',
            2: 'Nữ'
        },

        /**
         * workform
         */
        WORKFORM: {
            OTHER: 0,
            FULLTIME: 1,
            PARTTIME: 2
        },
        WORKFORM_MAPPING: {
            0: 'Khác',
            1: 'Fulltime',
            2: 'Parttime'
        },

        /**
         * postion
         */
        POSTION: {
            OTHER: 0,
            DEVELOPER: 1,
            TESTER: 2,
            BUSINESS_ANALYST: 3,
            DESIGNER: 4,
            COMTOR: 5
        },
        POSTION_MAPPING: {
            0: 'Khác',
            1: 'Developer',
            2: 'Tester',
            3: 'Business Analyst',
            4: 'Designer',
            5: 'Comtor'
        },

        /**
         * experience
         */
        EXPERIENCE: {
            OTHER: 0,
            STAFF: 1,
            LEADER: 2,
            PROJECT_MANAGER: 3
        },
        EXPERIENCE_MAPPING: {
            0: 'Khác',
            1: 'Staff',
            2: 'Leader',
            3: 'Project Manager'
        },

        ZOOM: {
            OTHER: 0,
            OUTSOURCE: 1,
            PRODUCT: 2
        },

        ZOOM_MAPPING: {
            0: 'Khác',
            1: 'Outsource',
            2: 'Product',
        },

        ROLE: {
            ADMINISTRATOR: 1,
            STAFF: 0
        }
    },

    /**
     * mode
     */
    MODE: {
        OTHER: 0,
        PUBLIC: 1,
        SECURITY: 2
    },

    MODE_MAPPING: {
        0: 'Khác',
        1: 'Công khai',
        2: 'Bảo mật'
    },

    /**
     * status
     */
    STATUS: {
        OTHER: 0,
        NEW: 1,
        INPROGRESS: 2,
        PENDING: 3,
        FEEDBACK: 4,
        WAITTING_REVIEW: 5,
        RESOLVED: 6,
        CLOSED: 7,
        REJECT: 8
    },
    STATUS_MAPPING: {
        0: 'Khác',
        1: 'New',
        2: 'In Progress',
        3: 'Pending',
        4: 'Feedback',
        5: 'Waiting Review',
        6: 'Resolved',
        7: 'Closed',
        8: 'Reject'
    },

    /**
     * Category
     */
    CATEGORY: {
        OTHER: 0,
        FEATURE: 1,
        BUG: 2,
        QA: 3,
        UPDATE: 4,
    },
    CATEGORY_MAPPING: {
        0: 'Khác',
        1: 'Feature',
        2: 'Bug',
        3: 'QA',
        4: 'Update'
    },

    /**
     * priority
     */
    PRIORITY: {
        OTHER: 0,
        LOW: 1,
        NORMAL: 2,
        HIGH: 3,
        URGENT: 4,
    },
    PRIORITY_MAPPING: {
        0: 'Khác',
        1: 'Low',
        2: 'Normal',
        3: 'High',
        4: 'Urgent'
    },





};
export default typeCode;