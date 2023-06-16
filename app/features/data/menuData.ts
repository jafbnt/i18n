type MenuItem = {
    id: string;
    label: string;
    icon?: string;
    link?: string;
    dropdown?: boolean;
    dropdownItems?: MenuItem[];
    newItem?: boolean;
    roles?: string[] | string;
  };
  
  
  export const menuData: MenuItem[] = [
    {
      id: "2",
      label: "menu.main.system.label",
      icon: "IconDeviceDesktopCog",
      dropdown: true,
      roles: [""],
      dropdownItems: [
        {
          id: "2.1",
          label: "menu.main.system.system_table.label",
          dropdown: true,
          icon: "IconDeviceDesktopAnalytics",
          roles: [""],
          dropdownItems: [
            {
              id: "2.1.1",
              label: "menu.main.system.system_table.materials.label",
              link: "system/system_tables/materials",
              roles: "role_2_3_1",
            },
            {
              id: "2.1.2",
              label: "menu.main.system.system_table.type_repositors.label",
              link: "system/system_tables/type_repositors",
              newItem: true,
              roles: "role_2_3_2",
            },
            {
              id: "2.1.3",
              label: "menu.main.system.system_table.operations.label",
              link: "/",
              roles: "role_2_3_3",
            },
            {
              id: "2.1.4",
              label: "menu.main.system.system_table.services.label",
              link: "/",
              roles: "role_2_3_3",
            },
          ],
        },
        {
          id: "2.2",
          label: "menu.main.system.customer_table.label",
          dropdown: true,
          icon: "IconUsers",
          roles: [""],
          dropdownItems: [
            {
              id: "2.2.1",
              label: "menu.main.system.customer_table.customer.label",
              link: "/",
              roles: "role_2_3_1",
            },
            {
              id: "2.2.2",
              label: "menu.main.system.customer_table.departments.label",
              link: "/",
              newItem: true,
              roles: "role_2_3_2",
            },
            {
              id: "2.2.3",
              label: "menu.main.system.customer_table.branch.label",
              link: "/",
              roles: "role_2_3_3",
            },
            {
              id: "2.2.4",
              label: "menu.main.system.customer_table.document_type.label",
              link: "/",
              roles: "role_2_3_3",
            },
          ],
        },
        {
          id: "2.3",
          label: "menu.main.system.cedoc_table.label",
          dropdown: true,
          icon: "IconBuildingSkyscraper",
          roles: [""],
          dropdownItems: [
            {
              id: "2.3.1",
              label: "menu.main.system.cedoc_table.company.label",
              link: "/",
              roles: "role_2_3_1",
            },
            {
              id: "2.3.2",
              label: "menu.main.system.cedoc_table.deposit.label",
              link: "system/system_tables/cedoc_tables/warehouse",
              newItem: true,
              roles: "role_2_3_2",
            },
            {
              id: "2.3.3",
              label: "menu.main.system.cedoc_table.modules.label",
              link: "system/system_tables/cedoc_tables/modules",
              roles: "role_2_3_3",
            },
            {
              id: "2.3.4",
              label: "menu.main.system.cedoc_table.positions.label",
              link: "/",
              roles: "role_2_3_3",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      label: "menu.main.administration.label",
      icon: "IconUserCog",
      dropdown: true,
      roles: [""],
      dropdownItems: [
        {
          id: "3.1",
          label: "menu.main.administration.user_registration.label",
          dropdown: true,
          icon: "IconUsersPlus",
          roles: [""],
          dropdownItems: [
            {
              id: "3.1.1",
              label: "menu.main.administration.user_registration.user_company.label",
              link: "administration/user_registration/user_company",
              roles: "",
            },
            {
              id: "3.1.2",
              label: "menu.main.administration.user_registration.user_client.label",
              link: "administration/user_registration/user_client",
              roles: "",
            },
          ],
        },
        {
          id: "3.2",
          label: "menu.main.administration.group_registration.label",
          dropdown: true,
          icon: "IconUsersGroup",
          roles: [""],
          dropdownItems: [
            {
              id: "3.2.1",
              label: "menu.main.administration.group_registration.group_company.label",
              link: "/administration/group_registration/group_company",
              roles: "",
            },
            {
              id: "3.2.2",
              label: "menu.main.administration.group_registration.group_customer.label",
              link: "administration/group_registration/group_customer",
              roles: "",
            },
          ],
        },
      ],
      
    },
    {
      id: "4",
      label: "menu.main.requests.label",
      icon: "IconGitPullRequest",
      link: "/",
      dropdown: true,
      roles: "menu.home",
    },
    {
      id: "5",
      label: "menu.main.production.label",
      icon: "IconHome2",
      link: "/",
      dropdown: true,
      roles: "menu.home",
    },
    {
      id: "6",
      label: "menu.main.service.label",
      icon: "IconMessage2",
      link: "/",
      dropdown: true,
      roles: "menu.home",
    },
    {
      id: "7",
      label: "menu.main.reports.label",
      icon: "IconMessage2",
      link: "/",
      dropdown: true,
      roles: "menu.home",
    },
  ];