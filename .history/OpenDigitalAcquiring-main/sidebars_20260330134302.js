/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {

  // ─────────────────────────────────────────────
  // HYBRID SIDEBAR
  // ─────────────────────────────────────────────
  HybridSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'hybrid/intro',
    },
    {
      type: 'category',
      label: 'Merchant App',
      items: [
        {
          type: 'category',
          label: 'Functional Specifications',
          items: [
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/Merchant-Registeration', label: 'Merchant Registeration' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/Merchant-Login', label: 'Merchant Login' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/Self-Onboarding', label: 'Self Onboarding' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/Merchant-approval', label: 'Merchant Approval from Backoffice' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/Change-login', label: 'Change/Forgot Login' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/DQRC', label: 'DQRC' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/RTP-n', label: 'RTP Now' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/RTP-l', label: 'RTP Later' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/mpos', label: 'mPOS' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/softpos', label: 'SoftPOS' },
          ],
        },
        {
          type: 'category',
          label: 'Merchant ETB',
          items: [
            { type: 'doc', id: 'hybrid/Merchant-app/Onboarded-Merchant/Merchant-Registeration', label: 'Merchant Registeration' },
            { type: 'doc', id: 'hybrid/Merchant-app/Onboarded-Merchant/Merchant-Login', label: 'Merchant Login' },
          ],
        },
        { type: 'doc', id: 'hybrid/Merchant-app/Dashboard', label: 'Dashboard' },
        { type: 'doc', id: 'hybrid/Merchant-app/self-onboarding', label: 'Merchant Self-Onboarding' },
        { type: 'doc', id: 'hybrid/Merchant-app/SQRC-Generation', label: 'SQRC Flow' },
        { type: 'doc', id: 'hybrid/Merchant-app/DQRC-Generation', label: 'DQRC Flow' },
        { type: 'doc', id: 'hybrid/Merchant-app/RTP-now-Generation', label: 'RTP-Now Flow' },
        { type: 'doc', id: 'hybrid/Merchant-app/RTP-later-Generation', label: 'RTP-later Flow' },
        { type: 'doc', id: 'hybrid/Merchant-app/Transaction-History', label: 'Transaction History' },
      ],
    },
  ],

  // ─────────────────────────────────────────────
  // POS SIDEBAR
  // ─────────────────────────────────────────────
  POSSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'POS/Intro',
    },
    {
      type: 'category',
      label: 'Functional Specification',
      items: [
        { type: 'doc', id: 'POS/FSD/pos', label: 'POS payment flow' },
        { type: 'doc', id: 'POS/FSD/mpos', label: 'mPOS payment flow' },
        { type: 'doc', id: 'POS/FSD/softpos', label: 'SoftPOS payment flow' },
      ],
    },
  ],

  // ─────────────────────────────────────────────
  // MERCHANT MANAGEMENT SIDEBAR
  // ─────────────────────────────────────────────
  MerchantManagementSidebar: [
    {
      type: 'category',
      label: 'RAAST P2M Acquiring',
      collapsible: false,
      link: { type: 'doc', id: 'RAAST/RAAST-P2M-Acquiring' },
      items: [],
    },
    // {
    //   type: 'category',
    //   label: 'Merchant Management',
    //   collapsible: true,
    //   items: [
    //     {
          type: 'category',
          label: 'Functional Specification',
          items: [
            { type: 'doc', id: 'RAAST/MMS/Functional-specification/Bulk-merchant-onboarding', label: 'Bulk Merchant Profile Creation' },
            { type: 'doc', id: 'RAAST/MMS/Functional-specification/Update-merchant-profile', label: 'Bulk Merchant Profile Updation' },
            { type: 'doc', id: 'RAAST/MMS/Functional-specification/Get-merchant-profile', label: 'Get Merchant Profile' },
            { type: 'doc', id: 'RAAST/MMS/Functional-specification/Generate-static-QR', label: 'Bulk Static QR Generation' },
          ],
        },
        {
          type: 'category',
          label: 'User Management',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/MMS/User Management/User-view', label: 'View Users' },
            { type: 'doc', id: 'RAAST/MMS/User Management/User-add', label: 'Add Users' },
          ],
        },
        {
          type: 'category',
          label: 'Role Management',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/MMS/Role Management/Role-view', label: 'View role' },
            { type: 'doc', id: 'RAAST/MMS/Role Management/Role-add', label: 'Add Roles' },
          ],
        },
        {
          type: 'category',
          label: 'Aggregator Management',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/MMS/Aggregatoer-Management/Aggregator-view', label: 'View aggregator' },
            { type: 'doc', id: 'RAAST/MMS/Aggregatoer-Management/Aggregator-add', label: 'Add/Update Aggregator' },
          ],
        },
        {
          type: 'category',
          label: 'Merchant Profile Management',
          items: [
            { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Merchant-Onboarding', label: 'Add Merchant' },
            { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/View-merchant', label: 'View Merchant' },
            { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Update-merchant', label: 'Update Merchant' },
            { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Bulk-Merchant-onboarding', label: 'Bulk Merchant Onboarding' },
            { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/QR-Generation', label: 'QR Generation' },
            { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Transaction-Summary', label: 'Transaction Summary' },
          ],
        },
        {
          type: 'category',
          label: 'Terminal Management',
          items: [
            { type: 'doc', id: 'RAAST/MMS/Terminal Management/Terminal-View', label: 'View Terminal' },
            { type: 'doc', id: 'RAAST/MMS/Terminal Management/Terminal-Creation', label: 'Terminal Creation' },
            { type: 'doc', id: 'RAAST/MMS/Terminal Management/Terminal-Update', label: 'Update Terminal' },
            { type: 'doc', id: 'RAAST/MMS/Terminal Management/Bulk-Terminal', label: 'Bulk Terminal Creation' },
          ],
        },
        {
          type: 'category',
          label: 'Soundbox Management',
          items: [
            { type: 'doc', id: 'RAAST/MMS/Soundbox-Management/Soundbox-Inventory', label: 'Soundbox Inventory' },
            { type: 'doc', id: 'RAAST/MMS/Soundbox-Management/Soundbox-Devices', label: 'Soundbox Devices' },
          ],
        },
        {
          type: 'category',
          label: 'MDR Management',
          items: [
            { type: 'doc', id: 'RAAST/MMS/MDR/MDR-Profile', label: 'MDR Profile' },
            { type: 'doc', id: 'RAAST/MMS/MDR/MDR-add', label: 'Add MDR' },
          ],
        },
  //     ],
  //   },
  // ],

  // ─────────────────────────────────────────────
  // MERCHANT PORTAL SIDEBAR
  // ─────────────────────────────────────────────
  MerchantPortalSidebar: [
    {
      type: 'category',
      label: 'Merchant Portal',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Functional Specification',
          items: [
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/Generate-Static-QR', label: 'Generate Static QR' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/View-Transactions', label: 'View Transactions' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/SQRC-OnUs-Flow', label: 'SQRC' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/DQRC-OnUs', label: 'DQRC' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/RTP-Now-OnUs', label: 'Request To Pay Now' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/RTP-Later-OnUs', label: 'Request To Pay Later' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/Merchant-notification', label: 'Merchant Notification' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/Settlement-Features', label: 'Settlement Features' },
          ],
        },
        { type: 'doc', id: 'RAAST/Merchant-portal/dashboard', label: 'Dashboard' },
        { type: 'doc', id: 'RAAST/Merchant-portal/SQRC', label: 'SQRC Generation' },
        { type: 'doc', id: 'RAAST/Merchant-portal/DQRC', label: 'DQRC Generation' },
        { type: 'doc', id: 'RAAST/Merchant-portal/RTP-now', label: 'RTP-now Generation' },
        { type: 'doc', id: 'RAAST/Merchant-portal/RTP-later', label: 'RTP-later Generation' },
        { type: 'doc', id: 'RAAST/Merchant-portal/RTP-later-bulk', label: 'RTP-later Bulk' },
        { type: 'doc', id: 'RAAST/Merchant-portal/P2M-Transactions', label: 'P2M Transactions' },
        { type: 'doc', id: 'RAAST/Merchant-portal/RTP-later-Transactions', label: 'Bulk RTP later Transactions' },
        { type: 'doc', id: 'RAAST/Merchant-portal/User-Profile', label: 'User Profile' },
      ],
    },
  ],

  // ─────────────────────────────────────────────
  // MERCHANT APP SIDEBAR
  // ─────────────────────────────────────────────
  MerchantAppSidebar: [
    {
      type: 'category',
      label: 'Merchant App',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Functional Specifications',
          items: [
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/Merchant-Registeration', label: 'Merchant Registeration' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/Merchant-Login', label: 'Merchant Login' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/Self-Onboarding', label: 'Self Onboarding' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/Merchant-approval', label: 'Merchant Approval from Backoffice' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/Change-login', label: 'Change/Forgot Login' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/DQRC', label: 'DQRC' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/RTP-n', label: 'RTP Now' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/RTP-l', label: 'RTP Later' },
          ],
        },
        {
          type: 'category',
          label: 'Merchant ETB',
          items: [
            { type: 'doc', id: 'RAAST/Merchant-app/Onboarded-Merchant/Merchant-Registeration', label: 'Merchant Registeration' },
            { type: 'doc', id: 'RAAST/Merchant-app/Onboarded-Merchant/Merchant-Login', label: 'Merchant Login' },
          ],
        },
        { type: 'doc', id: 'RAAST/Merchant-app/Dashboard', label: 'Dashboard' },
        { type: 'doc', id: 'RAAST/Merchant-app/self-onboarding', label: 'Merchant Self-Onboarding' },
        { type: 'doc', id: 'RAAST/Merchant-app/SQRC-Generation', label: 'SQRC Flow' },
        { type: 'doc', id: 'RAAST/Merchant-app/DQRC-Generation', label: 'DQRC Flow' },
        { type: 'doc', id: 'RAAST/Merchant-app/RTP-now-Generation', label: 'RTP-Now Flow' },
        { type: 'doc', id: 'RAAST/Merchant-app/RTP-later-Generation', label: 'RTP-later Flow' },
        { type: 'doc', id: 'RAAST/Merchant-app/Transaction-History', label: 'Transaction History' },
      ],
    },
  ],

};