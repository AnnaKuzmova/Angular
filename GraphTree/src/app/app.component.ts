import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from './user.model';
import { PanZoomConfig, PanZoomAPI, PanZoomModel, PanZoomConfigOptions } from 'ngx-panzoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GraphTree';
  user = {
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
    name: 'Ludmilla Sabina',
    jobTitle: 'CEO',
    hasChildren: true,
    children: [
      { 
        img: 'https://images.unsplash.com/photo-1509335035496-c47fc836517f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Stefcia Rolande',
        jobTitle: 'Head of Sales Force',
        hasChildren: true,
        children: [
          { 
            img: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Debora Lara',
            jobTitle: 'Senior Sales Force',
            hasChildren: true,
            children: [
              { 
                img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
                name: 'Elaheh Kegan',
                jobTitle: 'Senior Sales Force',
                hasChildren: true,
                children: [
                  { 
                    img: 'https://images.unsplash.com/photo-1515463892140-58a22e37ff72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    name: 'Clementina Xwm',
                    jobTitle: 'Regular Sales Force',
                    hasChildren: true,
                    children: [
                      { 
                        img: 'https://images.unsplash.com/photo-1587821100455-3c4313578ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
                        name: 'Lavender Tecumseh',
                        jobTitle: 'Junior Sales Force',
                        hasChildren: false
                      },
                      { 
                        img: 'https://images.unsplash.com/photo-1506610154363-2e1a8c573d2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        name: 'Martha Clara',
                        jobTitle: 'Regular Sales Force',
                        hasChildren: false
                      }
                    ]
                  },
                  { 
                    img: 'https://images.unsplash.com/photo-1630004184878-c60794d1c105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHx3b21hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
                    name: 'Tiia Ness',
                    jobTitle: 'Rwgular Sales Force',
                    hasChildren: false
                  }
                ]
              }
            ]
          },
          { 
            img: 'https://images.unsplash.com/photo-1537460186220-8cd3f80f24e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'Debora Lara',
            jobTitle: 'Senior Sales Force',
            hasChildren: true,
            children: [
              { 
                img: 'https://images.unsplash.com/photo-1537460186220-8cd3f80f24e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
                name: 'Alfréd Eustathius',
                jobTitle: 'Senior Sales Force',
                hasChildren: true,
                children: [
                  { 
                    img: 'https://images.unsplash.com/photo-1537460186220-8cd3f80f24e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
                    name: 'Emmerich Wigmar',
                    jobTitle: 'Regular Sales Force',
                    hasChildren: false
                  },
                  { 
                    img: 'https://images.unsplash.com/photo-1537460186220-8cd3f80f24e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
                    name: 'Carmen Bertók',
                    jobTitle: 'Regular Sales Force',
                    hasChildren: false
                  }
                ]
              }
            ]
          }
        ]
      },
      { 
        img: 'https://images.unsplash.com/photo-1534945773093-1119ae5684ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Prasanna Johanna',
        jobTitle: 'Head of Finances',
        hasChildren: false
      },
      { 
        img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Bagus Teunis',
        jobTitle: 'Head of Multitech',
        hasChildren: false
      },
      { 
        img: 'https://images.unsplash.com/photo-1513385581288-2e94adbbdbd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Tamila Hatice',
        jobTitle: 'Head of Design, UI/UX',
        hasChildren: false
      },
      {
        img: 'https://images.unsplash.com/photo-1489667897015-bf7a9e45c284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Elkanah Giulietta',
        jobTitle: 'Head of Mobile Dev',
        hasChildren: true,
        children: [
          {
            img: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'Anton Abiah',
            jobTitle: 'Senior Developer',
            hasChildren: false
          },
          {
            img: 'https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Emilie Marcel',
            jobTitle: 'Senior Developer',
            hasChildren: true,
            children: [
              {
                img: 'https://images.unsplash.com/photo-1496439786094-e697ca3584d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                name: 'Éliane Fadumo',
                jobTitle: 'Junior Developer',
                hasChildren: false
              },
              {
                img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
                name: 'Bulat Allyn',
                jobTitle: 'Junior Developer',
                hasChildren: false
              }
            ]
          }
        ]
      },
      { 
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Gauri Livia',
        jobTitle: 'Head of HR',
        hasChildren: true,
        children: [
          { 
            img: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Marge Ignace',
            jobTitle: 'Senior HR',
            hasChildren: false,
          },
          { 
            img: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Kumar Sylwia',
            jobTitle: 'Junior HR',
            hasChildren: false,
          },
          { 
            img: 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Claus Francene',
            jobTitle: 'Senior HR',
            hasChildren: false,
          }
        ]
      },
      {
        img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Leo Babette',
        jobTitle: 'Head of Web Dev',
        hasChildren: true,
        children: [
          {
            img: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Simona Zuzana',
            jobTitle: 'Senior Developer',
            hasChildren: false
          },
          {
            img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Ryker Elodia',
            jobTitle: 'Senior Developer',
            hasChildren: false
          }
        ]
      }
    ]
  }

  panZoomConfig: PanZoomConfig = new PanZoomConfig();

  constructor () {}

}
