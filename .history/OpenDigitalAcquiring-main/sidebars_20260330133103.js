module.exports = {

  // Keep these as-is
  HybridSidebar: [ /* unchanged */ ],
  POSSidebar: [ /* unchanged */ ],

  // ✅ NEW: Split into 3 separate sidebars

  MerchantManagementSidebar: [
    {
      type: 'category',
      label: 'RAAST P2M Acquiring',
      collapsible: false,
      link: { type: 'doc', id: 'RAAST/RAAST-P2M-Acquiring' },
      items: [],
    },
    {
      type: 'category',
      label: 'Merchant Management',
      collapsible: true,
      items: [
        // ✂️ Paste everything that was inside 'Merchant Management' from RAASTSidebar
        { type: 'category', label: 'Functional Specification', items: [ /* ... */ ] },
        { type: 'category', label: 'User Management', items: [ /* ... */ ] },
        { type: 'category', label: 'Role Management', items: [ /* ... */ ] },
        { type: 'category', label: 'Aggregator Management', items: [ /* ... */ ] },
        { type: 'category', label: 'Merchant Profile Management', items: [ /* ... */ ] },
        { type: 'category', label: 'Terminal Management', items: [ /* ... */ ] },
        { type: 'category', label: 'Soundbox Management', items: [ /* ... */ ] },
        { type: 'category', label: 'MDR Management', items: [ /* ... */ ] },
      ],
    },
  ],

  MerchantPortalSidebar: [
    {
      type: 'category',
      label: 'Merchant Portal',
      items: [
        // ✂️ Paste everything that was inside 'Merchant Portal' from RAASTSidebar
      ],
    },
  ],

  MerchantAppSidebar: [
    {
      type: 'category',
      label: 'Merchant App',
      items: [
        // ✂️ Paste everything that was inside 'Merchant App' from RAASTSidebar
      ],
    },
  ],
};