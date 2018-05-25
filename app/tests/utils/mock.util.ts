import { Type } from '@angular/core';

// Mocks a service and create spy's for methods
//
// ** Usage example **:
// let injector: any;
// beforeEach(() => {
//   injector = Injector.create({
//     providers: [
//       mockService(Service, ['function']),
//       {
//         provide: Service,
//         useClass: Service,
//         deps: [ ]
//       }
//     ]
//   });
// });
export function mockService(type: Type<any>, spyMethods: string[] = []) {
  const mockObject = {};
  for (const f in spyMethods) {
    mockObject[spyMethods[f]] = () => {
    };
    spyOn(mockObject, spyMethods[f] as never);
  }

  return {
    provide: type,
    useValue: mockObject
  };
}

export function mockServiceCallFakeMethod(type: Type<any>, spyMethod: string, callback?: (value: any) => any) {
  const mockObject = {};
  mockObject[spyMethod] = () => {
  };
  if (callback) {
    spyOn(mockObject, spyMethod as never).and.callFake(callback);
  }
  else {
    spyOn(mockObject, spyMethod as never);
  }

  return {
    provide: type,
    useValue: mockObject
  };
}
