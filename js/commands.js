/* {
    name: '',
    description: '',
    options: [
        {
            short: ,
            long: '',
            arg: '',
            description: ''
        },
        {
            short: ,
            long: '',
            arg: '',
            description: ''
        },
    ],
    argument: '',
    configuration: [],
    files: [
        {
            path: '',
            description: ''
        },
        {
            path: '',
            description: ''
        },
    ]
} */

const commands = [
{
    name: 'useradd',
    description: 'create a new user or update default new user information',
    options: [
        {
            short: '-b',
            long: '--base-dir',
            arg: 'BASE_DIR',
            description: 'The default base directory for the system if -d HOME_DIR is not specified. BASE_DIR is concatenated with the account name to define the home directory. If the -m option is not used, BASE_DIR must exist.'
        },
        {
            short: '-d',
            long: '--home',
            arg: 'HOME_DIR',
            description: 'The new user will be created using HOME_DIR as the value for the user\'s login directory. The default is to append the LOGIN name to BASE_DIR and use that as the login directory name. The directory HOME_DIR does not have to exist but will not be created if it is missing.'
        },
    ],
    argument: 'LOGIN',
    configuration: [
        {
            path:'',
            variables: ''
        }
    ],
    files: [
        {
            path: '/etc/passwd',
            description: 'User account information'
        },
    ]
},
{
    name: 'groupadd',
    description: 'create a new group',
    options: [
        {
            short: '-f',
            long: '--force',
            arg: '',
            description: 'This option causes the command to simply exit with success status if the specified group already exists. When used with -g, and the specified GID already exists, another (unique) GID is chosen (i.e. -g is turned off).'
        },
        {
            short: '-g',
            long: '--gid',
            arg: 'GID',
            description: 'The numerical value of the group\'s ID. This value must be unique, unless the -o option is used. The value must be non-negative. The default is to use the smallest ID value greater than 999 and greater than every other group. Values between 0 and 999 are typically reserved for system accounts.'
        },
    ],
    argument: 'group',
    configuration: [
        {
            path: '/etc/login.defs',
            variables: ['GID_MAX (number)','GID_MIN (number)','MAX_MEMBERS_PER_GROUP (number)','SYS_GID_MAX (number)','SYS_GID_MIN (number)']
        }
    ],
    files: [
        {
            path: '/etc/group',
            description: 'Group account information'
        },
    ]
},
]