// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// module.exports = {
//   overviewSidebar: [
//     {
//       type: 'category',
//       label: 'Overview',
//       collapsible: false,
//       link: { type: 'doc', id: 'overview/index' }, // Correct path to the Overview category
//       items: [
//         {
//           type: 'doc',
//           id: 'overview/developer-workflow',
//           label: 'Developer Workflow',
//         },
//         {
//           type: 'doc',
//           id: 'overview/data-type-references',
//           label: 'Data Type References',
//         },
//         {
//           type: 'doc',
//           id: 'overview/response-codes-error-handling',
//           label: 'Response Codes & Error Handling',
//         },
//       ],
//     },
//   ],

//const { type } = require('@generated/site-storage');

//   backofficeSidebar: [
//     {
//       type: 'category',
//       label: 'Backoffice',
//       collapsible: false,
//       link: { type: 'doc', id: 'backoffice/index' }, // Correct path to the Backoffice category
//       items: [
//         {
//           type: 'doc',
//           id: 'backoffice/dashboard',
//           label: 'Dashboard',
//         },

//         {
//           type: 'doc',
//           id: 'backoffice/compliance',
//           label: 'Compliance Review',
//         },

//         {
//           type: 'category',
//           label: 'Transactions',
//           items: [
//             {
//               type: 'doc',
//               id: 'backoffice/transactions/index',  
//               label: 'Transactions Overview',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/transactions/transaction-list',
//               label: 'Transaction List',
//             },
//           ],
//         },

//         {
//           type: 'category',
//           label: 'e-PRC',
//           items: [
//             {
//               type: 'doc',
//               id: 'backoffice/eprc/index',
//               label: 'e-PRC Overview',
//             },
//           ],
//         },

//         {
//           type: 'category',
//           label: 'Branch Records',
//           items: [
//             {
//               type: 'doc',
//               id: 'backoffice/branch-records/index',
//               label: 'Branch Records Overview',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/branch-records/user-management',
//               label: 'User Management',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/branch-records/bulk-upload',
//               label: 'Bulk Uploads',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/branch-records/maker-checker',
//               label: 'Maker / Checker Inbox',
//             },
//           ],
//         },

//         {
//           type: 'category',
//           label: 'Partners',
//           items: [
//             {
//               type: 'doc',
//               id: 'backoffice/partners/index',
//               label: 'Partners Overview',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/partners/partner-management',
//               label: 'Partner Management',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/partners/user-management',
//               label: 'Partner User Management',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/partners/maker-checker',
//               label: 'Partner Maker / Checker',
//             },
//           ],
//         },

//         {
//           type: 'category',
//           label: 'Sub-Agents',
//           items: [
//             {
//               type: 'doc',
//               id: 'backoffice/subagents/index',
//               label: 'Sub-Agent Overview',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/subagents/subagent-management',
//               label: 'Sub-Agent Management',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/subagents/user-management',
//               label: 'Sub-Agent User Management',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/subagents/bulk-upload',
//               label: 'Bulk User Upload',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/subagents/maker-checker',
//               label: 'Sub-Agent Maker / Checker',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  HybridSidebar: [
    {
      type: 'doc',
      RAASTSidebar: [
        // Only show RAAST docs/tables, no sidebar switching to merchant management, portal, or app
        { type: 'doc', id: 'RAAST/RAAST-P2M-Acquiring', label: 'RAAST P2M Acquiring' },
        { type: 'doc', id: 'RAAST/MMS/Functional-specification/Bulk-merchant-onboarding', label: 'Bulk Merchant Profile Creation' },
        { type: 'doc', id: 'RAAST/MMS/Functional-specification/Update-merchant-profile', label: 'Bulk Merchant Profile Updation' },
        { type: 'doc', id: 'RAAST/MMS/Functional-specification/Get-merchant-profile', label: 'Get Merchant Profile' },
        { type: 'doc', id: 'RAAST/MMS/Functional-specification/Generate-static-QR', label: 'Bulk Static QR Generation' },
        { type: 'doc', id: 'RAAST/MMS/User Management/User-view', label: 'View Users' },
        { type: 'doc', id: 'RAAST/MMS/User Management/User-add', label: 'Add Users' },
        { type: 'doc', id: 'RAAST/MMS/Role Management/Role-view', label: 'View role' },
        { type: 'doc', id: 'RAAST/MMS/Role Management/Role-add', label: 'Add Roles' },
        { type: 'doc', id: 'RAAST/MMS/Aggregatoer-Management/Aggregator-view', label: 'View aggregator' },
        { type: 'doc', id: 'RAAST/MMS/Aggregatoer-Management/Aggregator-add', label: 'Add/Update Aggregator' },
        { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Merchant-Onboarding', label: 'Add Merchant' },
        { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/View-merchant', label: 'View Merchant' },
        { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Update-merchant', label: 'Update Merchant' },
        { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Bulk-Merchant-onboarding', label: 'Bulk Merchant Onboarding' },
        { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/QR-Generation', label: 'QR Generation' },
        { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Transaction-Summary', label: 'Transaction Summary' },
        { type: 'doc', id: 'RAAST/MMS/Terminal Management/Terminal-View', label: 'View Terminal' },
        { type: 'doc', id: 'RAAST/MMS/Terminal Management/Terminal-Creation', label: 'Terminal Creation' },
        { type: 'doc', id: 'RAAST/MMS/Terminal Management/Terminal-Update', label: 'Update Terminal' },
        { type: 'doc', id: 'RAAST/MMS/Terminal Management/Bulk-Terminal', label: 'Bulk Terminal Creation' },
        { type: 'doc', id: 'RAAST/MMS/Soundbox-Management/Soundbox-Inventory', label: 'Soundbox Inventory' },
        { type: 'doc', id: 'RAAST/MMS/Soundbox-Management/Soundbox-Devices', label: 'Soundbox Devices' },
        { type: 'doc', id: 'RAAST/MMS/MDR/MDR-Profile', label: 'MDR Profile' },
        { type: 'doc', id: 'RAAST/MMS/MDR/MDR-add', label: 'Add MDR' },
      ],
            id: 'RAAST/Merchant-portal/User-Profile',
            },      
      ],

      
    },
    
    //Merchant App 
    {
      type: 'category',
      label: 'Merchant App',
      items: [
        {
          type: 'category',
          label: 'Functional Specifications',
          items: [
            {
              type: 'doc',
              id: 'RAAST/Merchant-app/Functional-specification/Merchant-Registeration',
              label: 'Merchant Registeration'
            },
            {
              type: 'doc',
              id: 'RAAST/Merchant-app/Functional-specification/Merchant-Login',
              label: 'Merchant Login'
            },
            {
              type: 'doc',
              id: 'RAAST/Merchant-app/Functional-specification/Self-Onboarding',
              label: 'Self Onboarding'
            },
            {
              type: 'doc',
              id: 'RAAST/Merchant-app/Functional-specification/Merchant-approval',
              label: 'Merchant Approval from Backoffice'
            },

            {
              type: 'doc',
              id: 'RAAST/Merchant-app/Functional-specification/Change-login',
              label: 'Change/Forgot Login'
            },

            {
              type: 'doc',
              id: 'RAAST/Merchant-app/Functional-specification/DQRC',
              label: 'DQRC'
            },
            
            {
              type: 'doc',
              id: 'RAAST/Merchant-app/Functional-specification/RTP-n',
              label: 'RTP Now'
            },
            {
              type: 'doc',
              id: 'RAAST/Merchant-app/Functional-specification/RTP-l',
              label: 'RTP Later'
            },


          ],
        },
        
        {
          type: 'category',
          label: 'Merchant ETB',
          items: [
            {
              type: 'doc',
              id: 'RAAST/Merchant-app/Onboarded-Merchant/Merchant-Registeration',
              label: 'Merchant Registeration'
            },
            {
              type: 'doc',
              id: 'RAAST/Merchant-app/Onboarded-Merchant/Merchant-Login',
              label: 'Merchant Login'
            },
          ],
        },

        {
            type: 'doc',
            id: 'RAAST/Merchant-app/Dashboard',
            label: 'Dashboard'
        },
        {
            type: 'doc',
            id: 'RAAST/Merchant-app/self-onboarding',
            label: 'Merchant Self-Onboarding'
        },
        {
            type: 'doc',
            id: 'RAAST/Merchant-app/SQRC-Generation',
            label: 'SQRC Flow'
        },
        {
            type: 'doc',
            id: 'RAAST/Merchant-app/DQRC-Generation',
            label: 'DQRC Flow'
        },
        {
            type: 'doc',
            id: 'RAAST/Merchant-app/RTP-now-Generation',
            label: 'RTP-Now Flow'
        },
        {
            type: 'doc',
            id: 'RAAST/Merchant-app/RTP-later-Generation',
            label: 'RTP-later Flow'
        },
        {
            type: 'doc',
            id: 'RAAST/Merchant-app/Transaction-History',
            label: 'Transaction History'
        },
      ],
    },

// Kong API Gateway
    // {
    //   type: 'category',
    //   label: 'Kong API Gateway',
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'APIs',
    //       items: [
    //         {
    //           type: 'doc',
    //           id: 'RAAST/Merchant-app/Functional-specification/Merchant-Registeration',
    //           label: 'Merchant Registeration'
    //         },
    //         {
    //           type: 'doc',
    //           id: 'RAAST/Merchant-app/Functional-specification/Merchant-Login',
    //           label: 'Merchant Login'
    //         },
    //         {
    //           type: 'doc',
    //           id: 'RAAST/Merchant-app/Functional-specification/Self-Onboarding',
    //           label: 'Self Onboarding'
    //         },
    //         {
    //           type: 'doc',
    //           id: 'RAAST/Merchant-app/Functional-specification/Merchant-approval',
    //           label: 'Merchant Approval from Backoffice'
    //         },

    //         {
    //           type: 'doc',
    //           id: 'RAAST/Merchant-app/Functional-specification/Change-login',
    //           label: 'Change/Forgot Login'
    //         },

    //         {
    //           type: 'doc',
    //           id: 'RAAST/Merchant-app/Functional-specification/DQRC',
    //           label: 'DQRC'
    //         },
            
    //         {
    //           type: 'doc',
    //           id: 'RAAST/Merchant-app/Functional-specification/RTP-n',
    //           label: 'RTP Now'
    //         },
    //         {
    //           type: 'doc',
    //           id: 'RAAST/Merchant-app/Functional-specification/RTP-l',
    //           label: 'RTP Later'
    //         },


    //       ],
    //     },        
    //   ],
    // },



//end MMS RAAST

  
  ],
  /*backofficeSidebar: [
    {
      type: 'category',
      label: 'Back Office',
      collapsible: true,
      link: { type: 'doc', id: 'docs/RAAST/solution-overview' },
      items: [
        {
          type: 'doc',
          id: 'back-office/congractulations',
          label: 'Congrats',
        },
        {
          type: 'doc',
          id: 'back-office/transactions',
          label: 'Transactions',
        },
        {
          type: 'doc',
          id: 'back-office/compliance',
          label: 'Compliance',
        },
        {
          type: 'doc',
          id: 'back-office/e-prc',
          label: 'E-PRC',
        },
        {
          type: 'doc',
          id: 'back-office/transaction-reversals',
          label: 'Transaction Reversals',
        },
        {
          type: 'doc',
          id: 'back-office/branch-records',
          label: 'Branch Records',
        },
        {
          type: 'doc',
          id: 'back-office/partners',
          label: 'Partners',
        },
        {
          type: 'doc',
          id: 'back-office/subagents',
          label: 'SubAgents',
        },
        {
          type: 'doc',
          id: 'back-office/checker-flows',
          label: 'Checker Flows',
        },
      ],
    },
    {
      type: 'category',
      label: 'Branch Portal',
      collapsible: true,
      items: [
        {
          type: 'doc',
          id: 'branch-portal/logging-in-and-changing-password',
          label: 'Logging in and Changing Password',
        },
        {
          type: 'doc',
          id: 'branch-portal/transaction-history',
          label: 'Transaction History',
        },
        {
          type: 'doc',
          id: 'branch-portal/transaction-lookup',
          label: 'Transaction Lookup',
        },
        {
          type: 'doc',
          id: 'branch-portal/transaction-approval',
          label: 'Transaction Approval',
        },
      ],
    },
  ],*/
};
