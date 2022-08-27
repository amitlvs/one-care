# Hospital

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

== ADMIN ==

- Signup their account.Then Login.
- Can register/view/approve/reject/delete doctor(approve those doctor who applied for job in the hospital)
- Can admit/view/approve/rejecr/discharge patient(discharge patient treatment is done)
- Can generate/download invoice pdf (generate invoice according to the medicine cost, doctor charge adn GST)
- Can view/book/approve Appointment(approve those appointments which is raised by the pateints)

== DOCTOR ==

Can view their patient details(symptopms,name,mobile) assigned to that doctor by admin
Can view thier appointments booked by admin
Can delete their appointment when doctor attend their appointment

== PATIENT ==
