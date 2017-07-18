/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from './authentication.component';
import * as import4 from './auth.service';
const styles_AuthenticationComponent:any[] = ([] as any[]);
export const RenderType_AuthenticationComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_AuthenticationComponent,
  data: {}
}
);
function View_AuthenticationComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'li',[[
        'routerLinkActive',
        'active'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(1720320,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(603979776,3,{links: 1}),
    import0.ɵqud(603979776,4,{linksWithHrefs: 1}),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,5).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(671744,[[
        4,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Signin']))
  ]
  ,(ck,v) => {
    const currVal_0:any = 'active';
    ck(v,1,0,currVal_0);
    const currVal_3:any = ck(v,6,0,'signin');
    ck(v,5,0,currVal_3);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,5).target;
    const currVal_2:any = import0.ɵnov(v,5).href;
    ck(v,4,0,currVal_1,currVal_2);
  });
}
function View_AuthenticationComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'li',[[
        'routerLinkActive',
        'active'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(1720320,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(603979776,5,{links: 1}),
    import0.ɵqud(603979776,6,{linksWithHrefs: 1}),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,5).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(671744,[[
        6,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Logout']))
  ]
  ,(ck,v) => {
    const currVal_0:any = 'active';
    ck(v,1,0,currVal_0);
    const currVal_3:any = ck(v,6,0,'logout');
    ck(v,5,0,currVal_3);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,5).target;
    const currVal_2:any = import0.ɵnov(v,5).href;
    ck(v,4,0,currVal_1,currVal_2);
  });
}
export function View_AuthenticationComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),22,'header',[[
        'class',
        'row spacing'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n              '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),19,'nav',[[
        'class',
        'col-md-8 col-md-offset-2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),16,'ul',[[
        'class',
        'nav nav-tabs'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'li',[[
        'routerLinkActive',
        'active'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(1720320,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(603979776,1,{links: 1}),
    import0.ɵqud(603979776,2,{linksWithHrefs: 1}),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,12).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(671744,[[
        2,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Signup'])),
    (l()(),import0.ɵted((null as any),['\n                  '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AuthenticationComponent_1)),
    import0.ɵdid(16384,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                  '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AuthenticationComponent_2)),
    import0.ɵdid(16384,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n              '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'row spacing'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n              '])),
    (l()(),import0.ɵeld(16777216,(null as any),(null as any),1,'router-outlet',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(147456,(null as any),0,import1.RouterOutlet,[
      import1.RouterOutletMap,
      import0.ViewContainerRef,
      import0.ComponentFactoryResolver,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:import3.AuthenticationComponent = v.component;
    const currVal_0:any = 'active';
    ck(v,8,0,currVal_0);
    const currVal_3:any = ck(v,13,0,'signup');
    ck(v,12,0,currVal_3);
    const currVal_4:boolean = !co.isLoggedIn();
    ck(v,17,0,currVal_4);
    const currVal_5:any = co.isLoggedIn();
    ck(v,20,0,currVal_5);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,12).target;
    const currVal_2:any = import0.ɵnov(v,12).href;
    ck(v,11,0,currVal_1,currVal_2);
  });
}
function View_AuthenticationComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-authentication',([] as any[]),(null as any),(null as any),(null as any),View_AuthenticationComponent_0,RenderType_AuthenticationComponent)),
    import0.ɵdid(49152,(null as any),0,import3.AuthenticationComponent,[import4.AuthService],(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const AuthenticationComponentNgFactory:import0.ComponentFactory<import3.AuthenticationComponent> = import0.ɵccf('app-authentication',import3.AuthenticationComponent,View_AuthenticationComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovRHJvcGJveC9XZWJEZXYvVWRlbXkvYW5ndWxhcjRBbmROb2RlUHJhY3RpY2FsTWVhbkd1aWRlX2FnYWluL2NvdXJzZS1wcm9qZWN0L2Fzc2V0cy9hcHAvYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovRHJvcGJveC9XZWJEZXYvVWRlbXkvYW5ndWxhcjRBbmROb2RlUHJhY3RpY2FsTWVhbkd1aWRlX2FnYWluL2NvdXJzZS1wcm9qZWN0L2Fzc2V0cy9hcHAvYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQudHMiLCJuZzovLy9EOi9Ecm9wYm94L1dlYkRldi9VZGVteS9hbmd1bGFyNEFuZE5vZGVQcmFjdGljYWxNZWFuR3VpZGVfYWdhaW4vY291cnNlLXByb2plY3QvYXNzZXRzL2FwcC9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC50cy5BdXRoZW50aWNhdGlvbkNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovRHJvcGJveC9XZWJEZXYvVWRlbXkvYW5ndWxhcjRBbmROb2RlUHJhY3RpY2FsTWVhbkd1aWRlX2FnYWluL2NvdXJzZS1wcm9qZWN0L2Fzc2V0cy9hcHAvYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQudHMuQXV0aGVudGljYXRpb25Db21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnc2lnbnVwJ11cIj5TaWdudXA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCI+PGEgW3JvdXRlckxpbmtdPVwiWydzaWduaW4nXVwiPlNpZ25pbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnbG9nb3V0J11cIj5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAiLCI8YXBwLWF1dGhlbnRpY2F0aW9uPjwvYXBwLWF1dGhlbnRpY2F0aW9uPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNLa0I7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBb0Q7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBRztJQUEwQjs7O0lBQTdFO0lBQUosU0FBSSxTQUFKO0lBQXVEO0lBQUgsU0FBRyxTQUFIOztJQUFBO0lBQUE7SUFBQSxTQUFBLG1CQUFBOzs7OztNQUNwRDtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUFtRDtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFHO0lBQTBCOzs7SUFBNUU7SUFBSixTQUFJLFNBQUo7SUFBc0Q7SUFBSCxTQUFHLFNBQUg7O0lBQUE7SUFBQTtJQUFBLFNBQUEsbUJBQUE7Ozs7O0lBTnJFO01BQ1k7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE0QjtNQUMxQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNDO01BQ3BDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBeUI7TUFDdkI7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBOEI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBRztJQUEwQjtJQUFlO0lBQzFFO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBZ0c7SUFDaEc7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUErRjtJQUM1RjtJQUNEO0lBQ0M7TUFDVDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlCO0lBQ3ZCO2dCQUFBOzs7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUErQjtJQUMzQjs7OztJQVJJO0lBQUosU0FBSSxTQUFKO0lBQWlDO0lBQUgsVUFBRyxTQUFIO0lBQ0E7SUFBOUIsVUFBOEIsU0FBOUI7SUFDOEI7SUFBOUIsVUFBOEIsU0FBOUI7O0lBRjhCO0lBQUE7SUFBQSxVQUFBLG1CQUFBOzs7OztJQ0poRDtnQkFBQTs7OzsifQ==
