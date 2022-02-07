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
        POSITION: {
            OTHER: 0,
            DEVELOPER: 1,
            TESTER: 2,
            BUSINESS_ANALYST: 3,
            DESIGNER: 4,
            COMTOR: 5
        },
        POSITION_MAPPING: {
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

        ROOM: {
            OTHER: 0,
            OUTSOURCE: 1,
            PRODUCT: 2
        },

        ROOM_MAPPING: {
            0: 'Khác',
            1: 'Outsource',
            2: 'Product',
        },

        ROLE: {
            ADMINISTRATOR: 1,
            STAFF: 0
        },
        ROLE_MAPPING: {
            0: 'Nhân viên',
            1: 'Quản trị viên',
        }
    },

    PROJECT: {
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

        PROJECT_STATUS: {
            OPENED: 1,
            CLOSED: 0
        },

        PROJECT_STATUS_MAPPING: {
            'Đang mở': 1,
            'Đã đóng': 0
        },
        TYPE: {
            OTHER: 0,
            OUTSOURCE: 1,
            PRODUCT: 2
        },
        TYPE_MAPPING: {
            0: 'Khác',
            1: 'Outsource',
            2: 'Product'
        }
    },

    TASK: {
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
    },

    FILLTER: {
        ALL: -1
    },

    COLOR: {
        COLOR_PRIORITY_MAPPING: {
            0: 'btn-dark',
            1: 'btn-secondary',
            2: 'btn-success',
            3: 'btn-warning',
            4: 'btn-danger'
        },

        COLOR_STATUS_MAPPING: {
            0: 'btn-dark',
            1: 'btn-info',
            2: 'btn-success',
            3: 'btn-secondary',
            4: 'btn-info',
            5: 'btn-primary',
            6: 'btn-secondary',
            7: 'btn-secondary',
            8: 'btn-dark'
        },
        COLOR_CATEGORY_MAPPING: {
            0: 'btn-dark',
            1: 'btn-primary',
            2: 'btn-danger',
            3: 'btn-success',
            4: 'btn-warning'
        }
    }





};
export default typeCode;