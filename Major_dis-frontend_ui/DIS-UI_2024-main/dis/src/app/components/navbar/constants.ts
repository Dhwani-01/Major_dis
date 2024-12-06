export const headerList: HeaderList = {
  faculty: [
    {
      icon: 'bi-list',
      text: 'Administration',
      route: 'admin',
    },
    {
      icon: 'bi-globe-central-south-asia',
      text: 'About',
      route: 'about',
    },
    {
      icon: 'bi-list-task',
      text: 'Tasks',
      route: 'tasks',
    },
    // {
    //   icon: 'bi-person-workspace',
    //   text: 'Faculty',
    //   route: 'faculty',
    // },
    // {
    //   icon: 'bi-mortarboard-fill',
    //   text: 'PHD',
    //   route: 'phd',
    // },
    {
      icon: 'bi-bank',
      text: 'Infrastructure',
      route: 'infrastructure',
    },
    {
      icon: 'header-icon-moodle icon-3x-4x text-white',
      text: 'Moodle',
      route: 'moodle',
    },
    {
      icon: 'bi-file-medical-fill',
      text: 'Leaves',
      route: 'leaves',
    },
    {
      icon: 'bi-question-circle-fill',
      text: 'Complaints',
      route: 'complaints',
    },
    {
      icon: 'bi-bell-fill',
      text: 'Notifications',
      route: 'notifications',
    },
    {
      icon: 'bi-person-circle',
      text: 'Profile',
      route: 'profile',
    },
    {
      icon: 'bi-list',
      text: 'Service',
      route: null,
       children: {
            text: 'Services',
            children: [
              {
                icon: null,
                text: 'Upload PYQ',
                route: 'uploads-pyq',
              },

            ],
          },
    },
  ],
  head: [
    {
      icon: 'bi-list',
      text: 'Administration',
      route: 'admin',
    },
    {
      icon: 'bi-globe-central-south-asia',
      text: 'About',
      route: 'about',
    },
    {
      icon: 'bi-list-task',
      text: 'Tasks',
      route: 'tasks',
    },
    {
      icon: 'bi-person-workspace',
      text: 'Faculty',
      route: 'faculty',
    },
    // {
    //   icon: 'bi-mortarboard-fill',
    //   text: 'PHD',
    //   route: 'phd',
    // },
    {
      icon: 'bi-bank',
      text: 'Infrastructure',
      route: 'infrastructure',
    },
    {
      icon: 'header-icon-moodle icon-3x-4x text-white',
      text: 'Moodle',
      route: 'moodle',
    },
    {
      icon: 'bi-file-medical-fill',
      text: 'Leaves',
      route: 'leaves',
    },
    {
      icon: 'bi-question-circle-fill',
      text: 'Complaints',
      route: 'complaints',
    },
    {
      icon: 'bi-bell-fill',
      text: 'Notifications',
      route: 'notifications',
    },
    {
      icon: 'bi-person-circle',
      text: 'Profile',
      route: 'profile',
    }
  ],
  student: [
    {
      icon: 'bi-list',
      text: 'Services',
      route: null,
      children: {
       text: 'Services',
            children: [

              {
                icon: null,
                text: 'PYQ',
                route: 'pyq',
              },
              {
                icon: null,
                text: 'Placement',
                route: 'placement',
              },
            ],
            },
    },
    // {
    //   icon: 'bi-list',
    //   text: 'Services',
    //   route: 'admin',
    // },
    // {
    //   icon: 'bi-globe-central-south-asia',
    //   text: 'About',
    //   route: 'about',
    // },
    // {
    //   icon: 'bi-list-task',
    //   text: 'Tasks',
    //   route: 'tasks',
    // },
    // {
    //   icon: 'bi-person-workspace',
    //   text: 'Faculty',
    //   route: 'faculty',
    // },
    // {
    //   icon: 'bi-mortarboard-fill',
    //   text: 'PHD',
    //   route: 'phd',
    // },
    // {
    //   icon: 'bi-bank',
    //   text: 'Infrastructure',
    //   route: 'infrastructure',
    // },
    {
      icon: 'header-icon-moodle icon-3x-4x text-white',
      text: 'Moodle',
      route: 'moodle',
    },
    {
      icon: 'bi-file-medical-fill',
      text: 'Leaves',
      route: 'leaves',
    },
    {
      icon: 'bi-question-circle-fill',
      text: 'Complaints',
      route: 'complaints',
    },
    {
      icon: 'bi-bell-fill',
      text: 'Notifications/student',
      route: 'notifications',
    },
    {
      icon: 'bi-person-circle',
      text: 'Profile',
      route: 'profile',
    }
  ],
};

export interface HeaderList {
  [key: string]: HeaderItem[];
  faculty: HeaderItem[];
  head: HeaderItem[];
  student: HeaderItem[];
}

export interface HeaderItem {
  icon: string | null;
  text: string | null;
  route?: string | null;
  children?: HeaderItemChild | null;
}
export interface HeaderItemChild {
  text: string;
  children: HeaderItem[] | null;
}
