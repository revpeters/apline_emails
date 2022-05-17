const teams = [{
    name: 'NFR',
    email: 'support-mailbox.nfr@db.com',
    apps: [
        {
            name: 'db-IRS',
            nar_id: '21611-1',
            sl3_contacts: 'sl3_dbIRS@example.com',
            business_contacts: 'businessUsers_dbIRS@example.com'
        },
        {
            name: 'eBCM - Workflow',
            nar_id: '35655-1',
            sl3_contacts: 'sl3_eBCM@example.com',
            business_contacts: 'businessUsers_eBCM@example.com'
        },
        {
            name: 'db-Risk Tableau',
            nar_id: '139117-1',
            sl3_contacts: 'dbrisktableau.l3.support@list.db.com',
            business_contacts: 'businessUsers_dbRisk@example.com'
        },
        {
            name: 'db-Score',
            nar_id: '21560-1',
            sl3_contacts: 'sl3_dbScore@example.com',
            business_contacts: 'businessUsers_dbScore@example.com'
        },
        {
            name: 'db-Opera-Data Repository & dbMarple',
            nar_id: '29625-1',
            sl3_contacts: 'sl3_dbOpera@example.com',
            business_contacts: 'businessUsers_dbOpera@example.com'
        },
        {
            name: 'RASAR',
            nar_id: '100874-1',
            sl3_contacts: 'sl3_RASAR@example.com',
            business_contacts: 'businessUsers_RASAR@example.com'
        },
        {
            name: 'db-GFMS',
            nar_id: '92673-1',
            sl3_contacts: 'sl3_dbGFMS@example.com',
            business_contacts: 'businessUsers_dbGFMS@example.com',
            maint_contacts: 'dl_gfms_biz_comms@list.db.com; GFMS_SL3_SUPPORT@list.db.com; GFMS_User@list.db.com; GFMS@list.db.com; GFMS_USer3@list.db.com; Sahil Sehgal <sahil.sehgal@db.com>; Deepak-X Goyal <deepak-x.goyal@db.com>'
        },
        {
            name: 'BCS Control Centre',
            nar_id: '126156-1',
            sl3_contacts: 'sl3_BCS@example.com',
            business_contacts: 'businessUsers_BCS@example.com'
        },
        {
            name: 'NPA-NTA Reputational Risk',
            nar_id: '21455-1',
            sl3_contacts: 'sl3_NPA@example.com',
            business_contacts: 'businessUsers_NPA@example.com'
        },
        {
            name: 'db-Monitor-SOx',
            nar_id: '35524-1',
            sl3_contacts: 'sl3_dbMonitor@example.com',
            business_contacts: 'businessUsers_dbMonitor@example.com'
        },
    ]
},
{
    name: 'ERM-MR',
    email: 'support-mailbox.erm-mr@db.com',
    apps: [
        {
            name: 'SAS Platform-STARS',
            nar_id: '110635-1',
            sl3_contacts: 'sl3_STARS@example.com',
            business_contacts: 'businessUsers_STARS@example.com'
        },
        {
            name: 'Enterprise Risk Portfolio Management',
            nar_id: '116692-1',
            sl3_contacts: 'sl3_ERPM@example.com',
            business_contacts: 'businessUsers_ERPM@example.com'
        },
        {
            name: 'MARS NMA',
            nar_id: '22991-1',
            sl3_contacts: 'sl3_MARS@example.com',
            business_contacts: 'businessUsers_MARS@example.com'
        },
        {
            name: 'db-Guardian',
            nar_id: '70574-1',
            sl3_contacts: 'sl3_dbGuardian@example.com',
            business_contacts: 'businessUsers_dbGuardian@example.com'
        },
        {
            name: 'Risk ID Aggregation Tool',
            nar_id: '125034-1',
            sl3_contacts: 'sl3_RiskID@example.com',
            business_contacts: 'businessUsers_RiskID@example.com'
        },
        {
            name: 'Monitor Control Framework-RDARR-Portal',
            nar_id: '106454-1',
            sl3_contacts: 'sl3_RDARR@example.com',
            business_contacts: 'businessUsers_RDARR@example.com'
        },
        {
            name: 'db-Rating-Core',
            nar_id: '54768-2',
            sl3_contacts: 'sl3_dbRatingCore@example.com',
            business_contacts: 'businessUsers_dbRatingCore@example.com'
        },
        {
            name: 'db-Rating-ASD',
            nar_id: '54768-2',
            sl3_contacts: 'sl3_dbRatingASD@example.com',
            business_contacts: 'businessUsers_dbRatingASD@example.com'
        },
        {
            name: 'db-RDD Rating Details Database',
            nar_id: '26173-1',
            sl3_contacts: 'sl3_dbRDD@example.com',
            business_contacts: 'businessUsers_dbRDD@example.com'
        },
        {
            name: 'Credit Default Engine',
            nar_id: '26380-1',
            sl3_contacts: 'sl3_CDE@example.com',
            business_contacts: 'businessUsers_CDE@example.com'
        },
        {
            name: 'db-Aqua',
            nar_id: '29147-1',
            sl3_contacts: 'sl3_dbAqua@example.com',
            business_contacts: 'businessUsers_dbAqua@example.com'
        },
        {
            name: 'db-ACE',
            nar_id: '37210-1',
            sl3_contacts: 'sl3_dbACE@example.com',
            business_contacts: 'businessUsers_dbACE@example.com'
        },
    ]
},
]


// [{
//     name: 'Team Name 1',
//     email: 'Team Email',
//     apps: [
//         {
//             name: 'App Name 1',
//             nar_id: '#####-#',
//             sl3_contacts: 'sl3_appName1@example.com',
//             business_contacts: 'businessUsers_appName1@example.com'
//         },
//         {
//             name: 'App Name 2',
//             nar_id: '#####-#',
//             sl3_contacts: 'sl3_appName2@example.com',
//             business_contacts: 'businessUsers_appName2@example.com'
//         },
//     ]
// },
// {
//     name: 'Team Name 2',
//     email: 'Team Email',
//     apps: [
//         {
//             name: 'App Name 1',
//             nar_id: '#####-#',
//             sl3_contacts: 'sl3_appName1@example.com',
//             business_contacts: 'businessUsers_appName1@example.com'
//         },
//         {
//             name: 'App Name 2',
//             nar_id: '#####-#',
//             sl3_contacts: 'sl3_appName2@example.com',
//             business_contacts: 'businessUsers_appName2@example.com'
//         },
//     ]
// }]