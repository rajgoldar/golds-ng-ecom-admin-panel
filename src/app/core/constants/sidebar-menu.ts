export const SIDEBAR_MENU = [
    {
      title: 'Dashboard',
      icon: 'home.svg',
      route: '/admin/dashboard',
      expanded: false,
    },
    {
      title: 'Products Management',
      icon: 'product.svg',
      expanded: false,
      children: [
        { title: 'Add Product', route: '/admin/products/add' },
        { title: 'List Products', route: '/admin/products/list' },
      ],
    },
    {
      title: 'Orders Management',
      icon: 'order.svg',
      expanded: false,
      children: [
        { title: 'All Orders', route: '/admin/orders/all' },
        { title: 'Orders Processing', route: '/admin/orders/processing' },
        { title: 'Shipped Orders', route: '/admin/orders/shipped' },
        { title: 'Delivered Orders', route: '/admin/orders/delivered' },
        { title: 'Returns & Refunds', route: '/admin/orders/returns-refunds' },
        { title: 'Cancelled Orders', route: '/admin/orders/cancelled' },
        { title: 'Analytics Reports', route: '/admin/orders/analytics-reports' },
      ],
    },
    {
      title: 'Customers Management',
      icon: 'customer.svg',
      expanded: false,
      children: [
        { title: 'List Customers', route: '/admin/customers/list' },
        { title: 'Engagement', route: '/admin/customers/engagement' },
        { title: 'Account Settings', route: '/admin/customers/account-settings' },
      ],
    },
    { title: 'Marketing & Promotions', icon: 'marketing.svg', route: '/admin/marketing' },
    { title: 'Payments & Transactions', icon: 'payment.svg', route: '/admin/payments' },
    { title: 'Reports & Analytics', icon: 'analytics.svg', route: '/admin/reports' },
    { title: 'Settings & Configurations', icon: 'settings.svg', route: '/admin/settings' },
    { title: 'Content Management', icon: 'content.svg', route: '/admin/content' },
    { title: 'Support & Feedback', icon: 'support.svg', route: '/admin/support' },
    { title: 'Users & Roles', icon: 'customer.svg', route: '/admin/users' },
  ];
  