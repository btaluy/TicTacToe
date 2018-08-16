// import { Injector} from '@angular/core';
// import { NavigationService } from '~/assets/services';
// import { LoginGuard } from '~/assets/guards/login-guard.service';
// import { Square } from '~/assets/domain';

// import { mockService } from '../utils/mock.util';

// describe('The LoginGuardService', () => {
//   let injector: Injector;
//   let loginGuard: any;

//   beforeEach(() => {
//     injector = Injector.create({
//       providers: [
//         mockService(NavigationService, ['navigateToAndClearHistory']),
//         {
//           provide: LoginGuard,
//           useClass: LoginGuard,
//           deps: [NavigationService]
//         }
//       ]
//     });

//     loginGuard = injector.get(LoginGuard);
//   });

//   describe('When the loginGuard is being used', () => {
//     it('should check if the user is logged in and return that the user can navigate to its destination.', () => {
//       //loginGuard.isUserLoggedIn().and.returnValue(Promise.resolve());
//       expect(loginGuard.canActivate()).toBeTruthy();
//     });
    
//     it('should check if the user is logged in and return that the user can\'t navigate to its destination and should be redirected back to login page.', () => {
//       //loginGuard.isUserLoggedIn().and.returnValue(Promise.reject());
//       expect(loginGuard.canActivate()).toBeFalsy();
//     });
//   });
// });